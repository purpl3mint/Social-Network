const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };

    state.newPostText = '';
    state.postsData.push(newPost);
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
}

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;