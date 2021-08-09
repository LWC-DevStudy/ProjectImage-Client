import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-northeast-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId:
      'ap-northeast-2:ap-northeast-2:f820ff76-6502-48e5-aba7-5954ee012ba3',
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
  imageUrl: [],
  file: [],
};

// middleware
const uploadImageDB = (callNext) => {
  return async function (dispatch, getState) {
    const imgList = getState().image.file;

    for (let i = 0; i < imgList.length; i++) {
      const img = imgList[i];

      if (typeof img !== 'object') {
        dispatch(uploadImage(img));
        continue;
      }

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'project-image-react',
        },
      });

      const promise = uploag.promise();

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
