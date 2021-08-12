// LIBRARY
import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// ELEMENTS
import Grid from '../elements/Grid';

// COMPONENTS
import ImageCard from '../components/ImageCard';

// REDUX
import post, { getPostDB, editPostDB } from '../redux/modules/post';

const Home = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  // console.log(postList);
  // const postId = useSelector((state) => state.post.postId);
  // console.log(postId);

  React.useEffect(() => {
    dispatch(getPostDB());
  }, []);

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
          {postList.map((p, idx) => {
            return <ImageCard key={idx} {...p} />;
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Home;
