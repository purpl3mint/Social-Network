let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'How are you?', likesCount: 5 },
      { id: 2, message: 'hi', likesCount: 9 },
      { id: 3, message: 'YAY! THIS IS MY POST!!!', likesCount: 6 }
    ]
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

export default state;