import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={style.message}>{props.text}</div>
  );
}

const Dialog = (props) => {

  let dialogsData = [
    { id: 1, name: 'Vanya' },
    { id: 2, name: 'Masha' },
    { id: 3, name: 'Petya' }
  ]

  let messagesData = [
    { id: 1, text: 'Hi' },
    { id: 2, text: 'How are you?' },
    { id: 3, text: ':D' }
  ]

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={style.messages}>
        <Message text={messagesData[0].text} />
        <Message text={messagesData[1].text} />
        <Message text={messagesData[2].text} />
      </div>
    </div>
  );
}

export default Dialog;