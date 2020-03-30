const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
      ],

      newMessageText: ""
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
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newMessageText) {
    this._state.dialogsPage.newMessageText = newMessageText;
    this._callSubscriber(this._state);
  },
  _sendMessage() {
    let newText = this._state.dialogsPage.newMessageText;
    let newMessage = {
      id: 4,
      text: newText
    }
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateNewMessageText(action.newMessageText);
    } else if (action.type === SEND_MESSAGE) {
      this._sendMessage();
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
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text
});

export default store;