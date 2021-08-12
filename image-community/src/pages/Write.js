// library
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';

// redux
import { addPostDB, editPostDB } from '../redux/modules/post';
import { imgActions } from '../redux/modules/image';
import post from '../redux/modules/post';
import { LogInCheck } from '../redux/modules/user';

// elements
import { Grid, Button } from '../elements';

const Write = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login);

  React.useEffect(() => {
    dispatch(LogInCheck());
  });

  //input 값
  const [contents, setContent] = React.useState();

  const $contents = (e) => {
    setContent(e.target.value);
  };

  // 작성 btn
  const writeBtn = () => {
    dispatch(addPostDB(contents));
  };

  // 수정 버튼
  const editBtn = () => {
    history.push('/write');
    dispatch(editPostDB(post.postId, post.contents));
  };

  // s3
  const handleInputFile = (event) => {
    const file = event.target.files[0];
    dispatch(imgActions.setInitialState());
    dispatch(imgActions.setFile([file]));
  };

  // 수정
  // const postId = useSelector((state) => state.post);
  // console.log(postId);

  // React.useEffect(() => {
  //   dispatch(getPostDB());
  // }, []);

  return (
    <Grid bgColor="navy" width="100%" height="100vh">
      <Grid margin="0 auto" height="auto">
        <input
          onChange={handleInputFile}
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

        <Textarea onChange={$contents} />
      </Grid>

      <Grid width="90px" margin="0 auto">
        <Button width="90px" clickEvent={is_login ? writeBtn : editBtn}>
          {is_login ? '작성하기' : '수정하기'}
        </Button>
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
