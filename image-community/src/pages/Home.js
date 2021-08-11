// LIBRARY
import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// ELEMENTS
import Grid from '../elements/Grid';

// COMPONENTS
import ImageCard from '../components/ImageCard';

// REDUX
import post from '../redux/modules/post';

const Home = (props) => {
  const dispatch = useDispatch();
  const { postList, imageUrl, contents, userName } = useSelector(
    (state) => ({
      postList: state.post.list,
    }),
    shallowEqual
  );
  console.log(postList);

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
