import React from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';

const Login = (props) => {
  return (
  <>
  <LoginPage>
    <LoginBox>
    <Input width="200px" margin="10px" label="아이디" placeholder="아이디를 입력해주세요."/>
    <Input width="200px" margin="10px" label="비밀번호" placeholder="비밀번호를 입력해주세요."/>
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
