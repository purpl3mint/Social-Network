import { usersAPI, profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
  postsData: [
    { id: 1, message: 'How are you?', likesCount: 5 },
    { id: 2, message: 'hi', likesCount: 9 },
    { id: 3, message: 'YAY! THIS IS MY POST!!!', likesCount: 6 }
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case ADD_POST: {
      stateCopy.postsData = [...state.postsData, { id: 5, message: action.newPostBody, likesCount: 0 }];
      stateCopy.newPostText = '';
      break;
    }
    case SET_USER_PROFILE: {
      stateCopy.profile = action.profile;
      break;
    }
    case SET_STATUS: {
      stateCopy.status = action.status;
      break;
    }
    case SAVE_PHOTO_SUCCESS: {
      stateCopy.profile = { ...stateCopy.profile, photos: action.photos };
      //stateCopy.profile.photos = action.photos;
      break;
    }
    default: {
      break;
    }
  }

  return stateCopy;
}

export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
});


export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}


export default profileReducer;