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
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name='Vanya' id='1' />
        <DialogItem name='Masha' id='2' />
        <DialogItem name='Petya' id='3' />
      </div>
      <div className={style.messages}>
        <Message text='Hi' />
        <Message text='How are you?' />
        <Message text=':D' />
      </div>
    </div>
  );
}

export default Dialog;