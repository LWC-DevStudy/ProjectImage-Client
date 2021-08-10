import instance from '../../shared/axios';
import { createSlice } from '@reduxjs/toolkit';

// functions
import { setToken, removeToken } from '../../shared/token';

// 회원가입
export const SignUpDB = ({ username, password, passwordCheck }) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/register', { username, password, passwordCheck })
      .then((res) => {
        console.log(res);
        window.alert('회원가입 성공!');
        history.push('/login');
      })
      .catch((err) => {
        window.alert('회원가입 실패!');
        console.log(err);
      });
  };
};

// 로그인
export const LogInDB = ({ username, password }) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/login', { username, password })
      .then((res) => {
        dispatch(SetUser(res.data));
        setToken(res.data.token);
        window.alert('로그인 성공');
        history.replace('/');
        // window.location.reload();
      })
      .catch((err) => {
        window.alert('아이디, 비밀번호를 확인해주세요.');
        console.log(err);
      });
  };
};

// 로그인 상태 확인
export const LogInCheck = (token) => {
  return function (dispatch) {
    if (token) {
      dispatch(LogInDB(token));
    }
  };
};

// initialState
const initialState = {
  user_info: '',
  is_login: false,
};

// redux
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 로그인
    SetUser: (state, action) => {
      setToken('token', action.payload.token);
      state.is_login = true;
    },
    // 로그아웃
    LogOut: (state, action) => {
      removeToken('token');
      state.is_login = false;
      window.alert('로그아웃 완료');
    },
  },
});

export const { SetUser, LogOut } = user.actions;
export default user;
