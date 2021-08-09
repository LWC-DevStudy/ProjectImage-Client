//import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';
import { getToken, setToken } from '../../shared/token';

export const addPostDB = (imageUrl, contents) => {
  return function (dispatch, getState, { history }) {
    const token = getToken('token');
    instance.defaults.header.common['Authorization'] = `${token}`;
    instance
      .post('/post/create', { imageUrl: imageUrl, contents: contents })
      .then((res) => {
        console.log(res);
        dispatch(addPost({ imageUrl: imageUrl, contents: contents }));
        window.alert('포스팅 완료👍');
        history.push('/');
      })
      .catch((err) => {
        window.alert('포스팅에 오류가 있어요!');
        console.log(err);
      });
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
      const imageUrl = action.payload.imageUrl;
      const contents = action.payload.contents;
      state.list.push({ imageUrl, contents });
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addPost, getPost } = post.actions;
export default post;
