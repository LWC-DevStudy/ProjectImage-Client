// library
import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';

// elements
import { Grid, Button, Input } from '../elements/index';

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    })
  });

  return (
  <>
  <LoginPage>
    <LoginBox>
    <Grid>    
    <Input 
      width="320px" 
      margin="10px 0" 
      label="아이디" 
      name="id" 
      placeholder="아이디를 입력해주세요."
      value={formik.values.id}
      onChange={formik.handleChange} 
    />
    {formik.errors.id && formik.touched.id && (
            <p>{formik.errors.id}</p>
          )}
    <Input
      type="password" 
      width="320px" 
      margin="10px 0" 
      label="비밀번호" 
      name="pw"
      placeholder="비밀번호를 입력해주세요."
      value={formik.values.pw}
      onChange={formik.handleChange} 
    />
    {formik.errors.pw && formik.touched.pw && (
            <p>{formik.errors.pw}</p>
          )}
    <Button type="submit" margin="10px 120px">로그인</Button>
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