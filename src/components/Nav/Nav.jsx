import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <>
      <div className={s.mainCont}>
        <div className={s.container}>
          <div className={s.logoCont}><img src={logo} alt="hello-build-logo.png"/></div>
          <div className={s.menuCont}>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav;