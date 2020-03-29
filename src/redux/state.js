const ADD_POST = 'ADD-POST';
const UPADTE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'How are you?', likesCount: 5 },
        { id: 2, message: 'hi', likesCount: 9 },
        { id: 3, message: 'YAY! THIS IS MY POST!!!', likesCount: 6 }
      ],
      newPostText: 'KeK'
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Vanya' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Petya' }
      ],

      messagesData: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: ':D' }
      ]
    }
  },

  _callSubscriber() {
    console.log();
  },

  getState() {
    return this._state;
  },

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.newPostText = '';
    this._state.profilePage.postsData.push(newPost);
    this._callSubscriber();
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText);
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const updateNewPostActionCreator = (text) => ({
  type: UPADTE_NEW_POST_TEXT,
  newText: text
});


export default store;