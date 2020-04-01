const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'How are you?', likesCount: 5 },
    { id: 2, message: 'hi', likesCount: 9 },
    { id: 3, message: 'YAY! THIS IS MY POST!!!', likesCount: 6 }
  ],
  newPostText: 'KeK'
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  if (action.type === ADD_POST) {
    stateCopy.postsData = [...state.postsData, { id: 5, message: stateCopy.newPostText, likesCount: 0 }];
    stateCopy.newPostText = '';
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    stateCopy.newPostText = action.newText;
  }

  return stateCopy;
}

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;