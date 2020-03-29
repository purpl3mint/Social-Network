/*
let rerenderEntireTree = () => {
  console.log();
}

let state = {
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
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.newPostText = '';
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
*/
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

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.newPostText = '';
    this._state.profilePage.postsData.push(newPost);
    this._callSubscriber();
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export default store;