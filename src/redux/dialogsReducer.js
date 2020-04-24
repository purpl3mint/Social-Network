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
  let stateCopy = { ...state };

  if (action.type === SEND_MESSAGE) {
    stateCopy.messagesData = [...state.messagesData, { id: 4, text: action.newMessageBody }];
    stateCopy.newMessageText = '';
  }

  return stateCopy;
}

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;