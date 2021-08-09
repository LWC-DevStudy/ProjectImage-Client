// LIBRARY
import React from 'react';

// ELEMENTS
import Grid from '../elements/Grid';

// COMPONENTS
import ImageCard from '../components/ImageCard';
const Home = (props) => {
  return (
    <React.Fragment>
      <Grid
        width="100%"
        height="100%"
        bgColor="navy"
        margin="0 0 0 0"
        padding="7%"
      >
        <Grid margin="0px auto 20px auto">
          <ImageCard />
        </Grid>
        <Grid margin="50px auto">
          <ImageCard />
        </Grid>
        <Grid margin="50px auto">
          <ImageCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Home;
