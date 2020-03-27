import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>
          <NavLink to='/dialogs/1' activeClassName={style.active}>Vanya</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to='/dialogs/2' activeClassName={style.active}>Masha</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to='/dialogs/3' activeClassName={style.active}>Petya</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>:D</div>
      </div>
    </div>
  );
}

export default Dialog;