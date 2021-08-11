//import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';
import { getToken, setToken } from '../../shared/token';

//REDUX
import { imgActions } from './image';

export const addPostDB = (post, imageUrl) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    const token = getToken('token');
    // instance.defaults.headers.common['Authorization'] = `${token}`;
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          const contents = getState().post.contents;
          const postInfo = {
            contents: post,
            imageUrl: imageUrl,
          };
          console.log(postInfo);

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
              console.log(newPost);
              dispatch(addPost(postInfo));
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
  list: [],
};

// 리덕스
const post = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      // const newPostList = [action.post, ...state.list];
      // return { ...state, list: newPostList };
      const imageUrl = action.payload.imageUrl;
      const contents = action.payload.contents;
      console.log(imageUrl, contents);
      return state.list.push({ imageUrl, contents });
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addPost, getPost } = post.actions;
export default post;
