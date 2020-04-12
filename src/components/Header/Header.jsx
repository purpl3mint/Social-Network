import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src='https://img2.freepng.ru/20180601/fbh/kisspng-black-mesa-research-facility-portal-aperture-labor-5b1154aef17ff0.7098908915278624469892.jpg' />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;