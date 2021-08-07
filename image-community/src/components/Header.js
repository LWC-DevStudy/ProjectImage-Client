// library
import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

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
          <Text margin="0" fontSize="44px" fontWeight="bold">
            Image
          </Text>
        </Grid>

        {/* <Grid>
          <Text fontWeight="600" margin="0 0 1% 0" textAlign="center">
            Front-end 👉 정진우 우종혁 이선민{' '}
          </Text>
          <Text
            fontWeight="600"
            margin="0"
            textAlign="center"
            alginItems="center"
          >
            Back-end 👉 채병훈 김인섭
          </Text>
        </Grid> */}

        <Grid
          margin="0"
          addstyle={() => {
            return css`
              ${flexBox('flex-end')}
            `;
          }}
        >
          <Button margin="0 2% 0 0">로그인</Button>
          <Button>회원가입</Button>
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
`;

export default Header;
