import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export default store;