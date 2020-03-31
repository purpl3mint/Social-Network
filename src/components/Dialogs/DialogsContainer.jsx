import React from 'react';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer.js';
import Dialog from './Dialogs';
import StoreContext from '../../storeContext.js';

const DialogsContainer = (props) => {

  return <StoreContext.Consumer>{
    (store) => {
      let state = store.getState().dialogsPage;

      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      }

      let onNewMessageChange = (text) => {
        store.dispatch(updateNewMessageTextCreator(text));
      }
      return (
        <Dialog
          updateNewMessageText={onNewMessageChange}
          sendMessage={onSendMessageClick}
          dialogsPage={state}
        />
      );
    }
  }
  </StoreContext.Consumer>
}

export default DialogsContainer;