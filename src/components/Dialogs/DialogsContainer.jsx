import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer.js';
import Dialog from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  }

  return (
    <Dialog
      updateNewMessageText={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
}

export default DialogsContainer;