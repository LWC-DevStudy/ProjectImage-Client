// library
import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';

// elements
import { Grid, Button, Input } from '../elements/index';

const Signup = (props) => {
  return (
  <>
  <SignupPage>
    <SignupBox>
    <Grid>    
    <Input width="320px" margin="10px 0" label="아이디" placeholder="아이디를 입력해주세요."/>
    <Input type="password" width="320px" margin="10px 0" label="비밀번호" placeholder="비밀번호를 입력해주세요."/>
    <Input type="password" width="320px" margin="10px 0" label="비밀번호 확인" placeholder="비밀번호를 한 번 더 입력해주세요."/>
    <Button margin="10px 120px">가입하기</Button>
    </Grid>    
    </SignupBox>
  </SignupPage>
  </>
  )
};

const SignupBox = styled.div`
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

const SignupPage = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: rgb(${(props) => props.theme.palatte.navy});
`;

export default Signup;