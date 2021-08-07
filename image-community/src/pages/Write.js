// library
import React from 'react';
import styled from 'styled-components';

// elements
import { Grid, Button } from '../elements';

const Write = (props) => {
  return (
    <Grid bgColor="navy" width="100%" height="100vh">
      <Grid margin="0 auto" height="auto">
        <input
          id="input--file"
          type="file"
          accept="image/png, image/jpeg"
          style={{
            backgroundColor: 'white',
            width: '100%',
            border: '2px solid white',
            padding: '20px',
            height: 'auto',
            margin: '40% auto 5% auto',
          }}
        />

        <Textarea />
      </Grid>

      <Grid width="90px" margin="0 auto">
        <Button width="90px">작성하기</Button>
      </Grid>
    </Grid>
  );
};

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 21px;
  margin: 2% auto 5% auto;
  outline: none;
`;

export default Write;
