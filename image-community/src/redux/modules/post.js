//import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';
import { getToken, setToken } from '../../shared/token';

//REDUX
import { imgActions } from './image';

export const addPostDB = ({ contents, imgUrl }) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    const token = getToken('token');
    instance.defaults.headers.common['Authorization'] = `${token}`;
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imgUrl;
          const contents = getState().post.contents;
          const postInfo = {
            contents: contents,
            imageUrl: imgUrl,
          };
          console.log(getState().post);

          // { imageUrl : "이미지 주소",
          //   contents : "내용",
          // },

          instance
            .post('/post/create', { ...postInfo })
            .then((res) => {
              const userInfo = getState().user;

              const newPost = {
                ...postInfo,
                userId: res.data.userId,
                postId: res.data.postId,
              };
              dispatch(addPost(newPost));
              dispatch(imgActions.setInitialState());
              console.log(newPost);
            })
            .catch((err) => {
              console.log(err);
            });
        })
      );
    }
    return;
  };
};

export const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get('/post/postId')
      .then((res) => {
        console.log(res);
        let post_list = res.data;
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        window.alert('페이지에 오류가 있어요!');
        console.log(err);
      });
  };
};

// Delete와 Edit 추가 예정

const initialState = {
  list: ['aaaaaaaaaaaaaaa'],
};

// 리덕스
const post = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      // const newPostList = [action.post, ...state.list];
      // return { ...state, list: newPostList };
      const imgFile = action.payload.imgUrl;
      const contents = action.payload.contents;
      console.log(imgFile, contents);
      return state.list.push({ imgFile, contents });
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addPost, getPost } = post.actions;
export default post;
