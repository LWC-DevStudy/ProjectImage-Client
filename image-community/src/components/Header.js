// library
import React from 'react';
import styled, { css } from 'styled-components';

// style
import { borderBox } from '../shared/style';

// elements
import { Grid, Button, Text } from '../elements/index';

const Header = (props) => {
  return (
    <HeaderStyle>
      <Grid>
        <Text>Image</Text>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </Grid>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background: rgb(${(props) => props.theme.palatte.navy});
  width: 100%;
  ${borderBox(0, '0 20px 0 20px')};
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export default Header;
