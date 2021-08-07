// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { flexBox, flexHoz } from '../shared/style';
//ELEMENTS
import Image from '../elements/Image';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
const ImageCard = (props) => {
  return (
    <Grid
      bgColor="white"
      width="100%"
      color="navy"
      margin="auto"
      padding="16px"
      border="1px solid black"
      addstyle={() => {
        return css`
          ${flexBox('column', 'column')}
        `;
      }}
    >
      <Grid width="1200px" margin="0px 8px 0px 0px">
        <Grid
          width="100%"
          margin="0 0 8px 0"
          addstyle={() => {
            return css`
              ${flexHoz('flex-end')}
            `;
          }}
        >
          <Text color="black" fontWeight="bold">
            정진우님
          </Text>
          <Button
            margin="1% 2px 0 2px"
            addstyle={() => {
              return css`
                height: 30px;
                line-height: 1px;
              `;
            }}
          >
            수정
          </Button>
          <Button
            margin="1% 0 0 0"
            addstyle={() => {
              return css`
                height: 30px;
                line-height: 1px;
              `;
            }}
          >
            삭제
          </Button>
        </Grid>
        <Image
          src={
            'https://cdn.pixabay.com/photo/2021/08/02/20/35/architecture-6517841_960_720.jpg'
          }
        />
        <Text color="black" fontWeight="bold" fontSize="30px" margin="60px 0">
          건물사진
        </Text>
      </Grid>
    </Grid>
  );
};

export default ImageCard;
