// library
import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';

// elements
import { Grid, Button, Input } from '../elements/index';

const Login = (props) => {
  return (
  <>
  <LoginPage>
    <LoginBox>
    <Grid>    
    <Input width="300px" margin="10px 0" label="아이디" placeholder="아이디를 입력해주세요."/>
    <Input width="300px" margin="10px 0" label="비밀번호" placeholder="비밀번호를 입력해주세요."/>
    <Button margin="10px 120px">로그인</Button>
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
  @media only screen and (max-width: 750px) {
    width: 100%;
    margin: 0 0 0 -200px;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    margin: -200px 0 0 -370px;
  }
`;

const LoginPage = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(24,44,97);
  
`;

export default Login;