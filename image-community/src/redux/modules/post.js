//import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';
import { getToken, setToken } from '../../shared/token';

//REDUX
import { imgActions } from './image';

export const addPostDB = (post) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.imageUrl;

    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imgUrl = getState().image.imageUrl;
          const postInfo = {
            ...post,
            img: imgUrl,
          };

          instance
            .post('/post/create', { ...postInfo })
            .then((res) => {
              const userInfo = getState().user;

              const newPost = {
                ...postInfo,
                ...userInfo,
                postId: res.data.postId,
              };
              dispatch(addPost(newPost));
              dispatch(imgActions.setInitialState());
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
      const newPostList = [action.post, ...state.list];
      return { ...state, list: newPostList };
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addPost, getPost } = post.actions;
export default post;
