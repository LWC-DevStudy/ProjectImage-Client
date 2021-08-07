// LIBRARY
import React from 'react';
import styled from 'styled-components';
//ELEMENTS
import Image from '../elements/Image';
import Grid from '../elements/Grid';
const ImageCard = (props) => {
  return (
    <Grid bgColor="white" color="navy" margin="200px 0px" padding="16px">
      <Grid width="auto" margin="0px 8px 0px 0px">
        <Image
          src={
            'https://cdn.pixabay.com/photo/2021/08/02/20/35/architecture-6517841_960_720.jpg'
          }
        />
      </Grid>
    </Grid>
  );
};

export default ImageCard;
