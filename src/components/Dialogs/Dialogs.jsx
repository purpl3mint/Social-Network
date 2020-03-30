import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogsReducer.js';

const Dialog = (props) => {

  let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.state.messagesData.map(message => <Message text={message.text} />);
  let newMessageText = props.state.newMessageText;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMessageTextCreator(text));
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <textarea
            value={newMessageText}
            onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea>
        </div>
        <div><button onClick={onSendMessageClick}>Send message</button></div>
      </div>
    </div>
  );
}

export default Dialog;