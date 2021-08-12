// library
import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { LogInDB } from '../redux/modules/user';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';

// elements
import { Grid, Button, Input } from '../elements/index';

const Login = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    validationSchema: Yup.object({
      username: Yup.string().required('아이디를 입력해주세요!!'),
      password: Yup.string().required('패스워드를 입력해주세요!'),
    }),

    onSubmit: (values) => {
      dispatch(LogInDB(values));
    },
  });

  return (
  <>
  <LoginPage>
    <LoginBox>
    <Grid>
    <form name="loginForm" onSubmit={formik.handleSubmit}>    
    <Input 
      width="320px" 
      margin="10px 0" 
      label="아이디" 
      placeholder="아이디를 입력해주세요."
      _onChange={formik.handleChange}
      value={formik.values.username}
      id="username"
      name="username"
      type="username"
    />
    
    <Input
      type="password" 
      width="320px" 
      margin="10px 0" 
      label="비밀번호" 
      name="password"
      placeholder="비밀번호를 입력해주세요."
      _onChange={formik.handleChange}
      value={formik.values.password}
      id="password"
      
    />
    
    <Button type="submit" margin="10px 120px">로그인</Button>
    </form>
    </Grid>
    </LoginBox>
  </LoginPage>
  </>
  )
};

const LoginBox = styled.div`
  width: 500px;
  margin: auto;
  padding: 400px;
  @media only screen and (max-width: 810px) {
    width: 100%;
    margin: 0 0 0 -200px;
  }
  @media only screen and (max-width: 530px) {
    width: 100%;
    margin: -200px 0 0 -370px;
  }
`;

const LoginPage = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(${(props) => props.theme.palatte.navy});
  
`;

export default Login;