// library
import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// style
import { borderBox, flexBox, flexHoz } from '../shared/style';

// elements
import { Grid, Button, Text } from '../elements/index';

const Header = (props) => {
  const path = useLocation().pathname;

  // const is_login = useSelector((state) => state.user.is_login);

  // if (is_login) {
  //   return (
  //     <HeaderStyle>
  //       <Grid
  //         width="100%"
  //         addstyle={() => {
  //           return css`
  //             ${flexBox('space-between')}
  //           `;
  //         }}
  //       >
  //         <Grid>
  //           <Text margin="0" fontSize="44px" fontWeight="bold">
  //             Image
  //           </Text>
  //         </Grid>

  //         <Grid
  //           margin="0"
  //           addstyle={() => {
  //             return css`
  //               ${flexBox('flex-end')}
  //             `;
  //           }}
  //         >
  //           <Button padding="12px">로그아웃</Button>
  //         </Grid>
  //       </Grid>
  //     </HeaderStyle>
  //   );
  // }

  return (
    <HeaderStyle>
      <Grid
        width="100%"
        addstyle={() => {
          return css`
            ${flexBox('space-between')}
          `;
        }}
      >
        <Grid>
          <Link to="/">
            <Text margin="0" fontSize="44px" fontWeight="bold">
              Image
            </Text>
          </Link>
        </Grid>

        <Grid
          width="14.5%"
          addstyle={() => {
            return css`
              ${flexBox('space-between')}
            `;
          }}
        >
          <Link to={path === '/' ? '/login' : 'write'}>
            <Button width="100%">{path === '/' ? '로그인' : '작성하기'}</Button>
          </Link>
          <Link to={path === '/' ? '/signup' : '/'}>
            <Button>{path === '/' ? '회원가입' : '로그아웃'}</Button>
          </Link>
        </Grid>
      </Grid>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background: rgb(${(props) => props.theme.palatte.navy});
  width: 100%;
  ${borderBox(0, '20px')};
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  a {
    text-decoration: none;
  }
`;

export default Header;
