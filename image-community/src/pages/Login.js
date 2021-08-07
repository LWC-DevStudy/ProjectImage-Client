import React from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import Button from '../elements/Button';

const Login = (props) => {
  return (
  <>
  <LoginPage>
    <LoginBox>
    <Input width="300px" margin="10px 0" label="아이디" placeholder="아이디를 입력해주세요."/>
    <Input width="300px" margin="10px 0" label="비밀번호" placeholder="비밀번호를 입력해주세요."/>
    <Button style={{height:'50px'}} margin="10px 100px" width="100px">로그인</Button>
    </LoginBox>
  </LoginPage>
  </>
  )
};

const LoginBox = styled.div`
  width: 500px;
  margin: auto;
  padding: 400px;
`;

const LoginPage = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(24,44,97);
`;

export default Login;