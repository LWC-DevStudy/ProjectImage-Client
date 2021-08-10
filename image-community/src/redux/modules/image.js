import { createActions, handleActions } from 'redux-actions';
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-northeast-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:886420cf-ca69-41d3-9f16-09beaf2cb566',
  }),
});

// action
const UPLOAD_IMAGE = 'IMAGE';
const SET_FILE = 'SET_FILE';
const DEL_FILE = 'DEL_FILE';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

// action creator
const uploadImage = (imgUrl) => ({ type: UPLOAD_IMAGE, imgUrl });
const setFile = (file) => ({ type: SET_FILE, file });
const delFile = (postId) => ({ type: DEL_FILE, postId });
const setInitialState = () => ({ type: SET_INITIAL_STATE });

// initial state
const initialState = {
  imgUrl: [],
  file: [],
};

// middleware
const uploadImageDB = (callNext) => {
  return async function (dispatch, getState) {
    const imgList = getState().image.file;

    for (let i = 0; i < imgList.length; i++) {
      const imgUrl = imgList[i];

      if (typeof img !== 'object') {
        dispatch(uploadImage(imgUrl));
        continue;
      }

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 's3-image-project',
          Key: imgUrl.name,
          Body: imgUrl,
        },
      });

      const promise = upload.promise();

      await promise
        .then((data) => {
          dispatch(uploadImage(data.Location));
        })
        .catch((error) => {
          console.log(error);
          return alert('오류가 발생했습니다: ', error.message);
        });
    }
    callNext();
  };
};

// reducer
function image(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, imgUrl: [...state.imgUrl, action.imgUrl] };
    case SET_FILE:
      return { ...state, file: [...state.file, ...action.file] };
    case DEL_FILE:
      const fileList = state.file.filter((img, idx) => action.index !== idx);

      return { ...state, file: fileList };
    case SET_INITIAL_STATE:
      return { imgUrl: [], file: [] };

    default:
      return state;
  }
}

export default image;

export const imgActions = {
  uploadImage,
  setFile,
  delFile,
  setInitialState,
  uploadImageDB,
};
