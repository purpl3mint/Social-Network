const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
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
  ],

  newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newMessageText;
  } else if (action.type === SEND_MESSAGE) {
    let newText = state.newMessageText;
    let newMessage = {
      id: 4,
      text: newText
    }
    state.messagesData.push(newMessage);
    state.newMessageText = '';
  }

  return state;
}

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text
});

export default dialogsReducer;