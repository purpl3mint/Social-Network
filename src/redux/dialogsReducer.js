const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let message = action.newMessageBody;
      return [...state, { id: 4, text: message }];
    default:
      return state;
  };
}

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;