// LIBRARY
import React from 'react';
import styled, { css } from 'styled-components';
import { flexBox, flexHoz } from '../shared/style';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
//ELEMENTS
import Image from '../elements/Image';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import post, { getPostDB } from '../redux/modules/post';
const ImageCard = (post) => {
  console.log(post.username);
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
            {post.username}
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
        <Image src={post.imageUrl} />
        <Text color="black" fontWeight="bold" fontSize="30px" margin="60px 0">
          {post.contents}
        </Text>
      </Grid>
    </Grid>
  );
};

export default ImageCard;
