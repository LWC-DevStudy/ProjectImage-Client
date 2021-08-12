// LIBRARY
import React from 'react';
import { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';

// STYLE
import { flexBox, flexHoz } from '../shared/style';

//ELEMENTS
import Image from '../elements/Image';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';

//REDUX
import post, {
  getPostDB,
  editPostDB,
  deletePostDB,
} from '../redux/modules/post';
import { imaActions } from '../redux/modules/image';

const ImageCard = (post) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const post_list = useSelector((state) => state.post.list);
  // const postId = useSelector((state) => state.post.postId);
  const postId = history.location.pathname.split('/')[2];

  let idx = post_list.findIndex((p) => p.id === postId);
  const _post = post_list[idx];
  // console.log(_post);

  // contents 수정
  const [contents, setContents] = React.useState(_post.contents);
  const input_contents = (e) => {
    setContents(e.target.value);
  };

  const editBtn = () => {
    dispatch(editPostDB(postId, contents));
  };

  // console.log(post.username);
  // console.log(post.postId);

  // 삭제 버튼
  const post_name = post.username;
  const my_post = useSelector((state) => state.user.user_info);
  const vs = my_post === post_name;

  const deleteBtn = () => {
    dispatch(deletePostDB(postId));
  };

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
          {vs && (
            <React.Fragment>
              <Button
                clickEvent={editBtn}
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
                clickEvent={deleteBtn}
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
            </React.Fragment>
          )}
        </Grid>
        <Image src={post.imageUrl} />
        <Text
          color="black"
          fontWeight="bold"
          fontSize="30px"
          margin="60px 0"
          onChange={input_contents}
        >
          {post.contents}
        </Text>
      </Grid>
    </Grid>
  );
};

export default ImageCard;
