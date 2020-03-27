import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialog = (props) => {

  let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.state.messagesData.map(message => <Message text={message.text} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialog;