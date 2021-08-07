import React from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import Button from '../elements/Button';
import Grid from '../elements/Button';

const Signup = (props) => {
  return (
  <>
  <SignupPage>
    <SignupBox>
    <Input width="300px" margin="10px 0" label="아이디" placeholder="아이디를 입력해주세요."/>
    <Input width="300px" margin="10px 0" label="비밀번호" placeholder="비밀번호를 입력해주세요."/>
    <Input width="300px" margin="10px 0" label="비밀번호 확인" placeholder="비밀번호를 한 번 더 입력해주세요."/>
    <Button>가입하기</Button>
    </SignupBox>
  </SignupPage>
  </>
  )
};

const SignupBox = styled.div`
  width: 500px;
  margin: auto;
  padding: 400px;
`;

const SignupPage = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(24,44,97);
`;

export default Signup;