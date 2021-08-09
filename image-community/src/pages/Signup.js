// library
import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';

// form
import { useFormik } from "formik";
import * as Yup from "yup";

// reducer
import { SignUpDB } from '../redux/modules/user';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';

// elements
import { Grid, Button, Input } from '../elements/index';

const Signup = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordCheck: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, '아이디는 4자리 이상이여야 합니다.')
        .required('아이디를 입력해주세요.'),
      password: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 입력해주세요.'),
        passwordCheck: Yup.string()
        .min(4, '비밀번호는 4자리 이상이여야 합니다.')
        .required('비밀번호를 재입력해주세요')
        .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
    }),
    onSubmit: (values) => {
      dispatch(SignUpDB(values));
    },
  });

  return (
  <>
  <SignupPage>
    <SignupBox>
    <Grid>    
    <Input 
      width="320px" 
      margin="10px 0" 
      label="아이디" 
      placeholder="아이디를 입력해주세요."
      value={formik.values.username}
      onChange={formik.handleChange} 
    />
    {formik.errors.username && formik.touched.username && (
            <p>{formik.errors.username}</p>
    )}
    <Input 
      type="password" 
      width="320px" 
      margin="10px 0" 
      label="비밀번호" 
      placeholder="비밀번호를 입력해주세요."
      value={formik.values.password}
      onChange={formik.handleChange} 
    />
    {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
    )}
    <Input 
      type="password" 
      width="320px" 
      margin="10px 0" 
      label="비밀번호 확인" 
      placeholder="비밀번호를 한 번 더 입력해주세요."
      value={formik.values.passwordCheck}
      onChange={formik.handleChange} 
    />
    {formik.errors.passwordCheck && formik.touched.passwordCheck && (
            <p>{formik.errors.passwordCheck}</p>
    )}
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