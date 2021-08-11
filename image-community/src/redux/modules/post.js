//import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

//REDUX
import { imgActions } from './image';

export const addPostDB = (post) => {
  return function (dispatch, getState, { history }) {
    const imgFile = getState().image.file;
    if (imgFile.length) {
      dispatch(
        imgActions.uploadImageDB(() => {
          const imageUrl = getState().image.imageUrl;
          const postInfo = {
            contents: post,
            imageUrl: imageUrl,
          };
          instance
            .post('/post/create', postInfo)
            .then((res) => {
              dispatch(addPost(postInfo));
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
    addPost(state, action) {
      const imageUrl = action.payload.imageUrl;
      const contents = action.payload.contents;
      state.list.push(imageUrl, contents);
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addPost, getPost } = post.actions;
export default post;
