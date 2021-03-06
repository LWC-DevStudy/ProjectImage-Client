// LIBRARY
import React from 'react';
import { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';
import { Link } from 'react-router-dom';

// STYLE
import { flexBox, flexHoz } from '../shared/style';

//ELEMENTS
import { Image, Grid, Text, Button } from '../elements/index';

//REDUX
import { editPostDB, deletePostDB } from '../redux/modules/post';
import { LogInCheck } from '../redux/modules/user';

const ImageCard = (post) => {
  // console.log(post);
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  // console.log(post.postId);
  React.useEffect(() => {
    dispatch(LogInCheck());
  });

  // const post_list = useSelector((state) => state.post.list);
  // // const postId = useSelector((state) => state.post.postId);
  // const postId = post.postId;

  // let idx = post_list.findIndex((p) => p.id === postId);
  // const _post = post_list[idx];
  // // console.log(_post);

  // // contents 수정

  // 삭제 버튼
  const post_name = post.username;
  const my_post = useSelector((state) => state.user.user_info);
  const vs = my_post === post_name;

  const deleteBtn = () => {
    dispatch(deletePostDB(post.postId));
  };

  if (is_login) {
    return (
      <Grid
        bgColor="white"
        width="100%"
        color="navy"
        margin="5% 0 0 0"
        padding="16px"
        border="1px solid black"
        addstyle={() => {
          return css`
            ${flexBox('column', 'column')}
          `;
        }}
      >
        <Grid width="1200px" margin="10% 8px 0px 0px">
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
                <Link to="/write">
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
                </Link>
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
          <Text color="black" fontWeight="bold" fontSize="30px" margin="60px 0">
            {post.contents}
          </Text>
        </Grid>
      </Grid>
    );
  }

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
