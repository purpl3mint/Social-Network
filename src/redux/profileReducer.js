import { usersAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  postsData: [
    { id: 1, message: 'How are you?', likesCount: 5 },
    { id: 2, message: 'hi', likesCount: 9 },
    { id: 3, message: 'YAY! THIS IS MY POST!!!', likesCount: 6 }
  ],
  newPostText: 'KeK',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case ADD_POST: {
      stateCopy.postsData = [...state.postsData, { id: 5, message: stateCopy.newPostText, likesCount: 0 }];
      stateCopy.newPostText = '';
      break;
    }
    case UPDATE_NEW_POST_TEXT: {
      stateCopy.newPostText = action.newText;
      break;
    }
    case SET_USER_PROFILE: {
      stateCopy.profile = action.profile;
      break;
    }
    default: {
      break;
    }
  }

  return stateCopy;
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}

export default profileReducer;