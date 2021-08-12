// import
import { createSlice } from '@reduxjs/toolkit';
import instance from '../../shared/axios';

// redux
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
            username: post.username,
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
      .get('/post')
      .then((res) => {
        // console.log(res);
        let post_list = res.data;
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        window.alert('페이지에 오류가 있어요!');
        console.log(err);
      });
  };
};

// 게시물 수정
export const editPostDB = (postId, contents) => {
  return function (dispatch, getState, { history }) {
    // if (!postId) {
    //   console.log('게시물 정보 없음');
    //   return;
    // }
    instance
      .put(`/post/edit/${postId}`, { contents: contents })
      .then((res) => {
        console.log(res);
        window.alert('게시글 수정 완료');
        history.replace('/');
      })
      .catch((err) => {
        console.log(postId);
        console.error(err);
      });
  };
};

export const deletePostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/post/delete/${postId}`)
      .then((res) => {
        dispatch(deletePost(postId));

        window.alert('게시물 삭제 완료');
      })
      .catch((err) => {
        console.log(postId);
        console.error(err);
      });
  };
};

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
      const username = action.payload.username;
      state.list.push(imageUrl, contents, username);
    },

    getPost: (state, action) => {
      state.list = action.payload;
    },

    editPost: (state, action) => {
      const editList = state.list.map((post) => {
        if (post.postId === action.postId) {
          return action.post;
        }
        return post;
      });
      return { ...state, list: editList };
    },

    deletePost: (state, action) => {
      const deleteList = state.list.filter(
        (post) => post.posId !== action.postId
      );

      return { ...state, list: deleteList };
    },
  },
});

export const { addPost, getPost, editPost, deletePost } = post.actions;
export default post;
