import React from 'react';
import './Header.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useUserInfo } from '@/store/UserSlice';

const Header = () => {
  const user = useUserInfo();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <span>TechRadar by Team5</span>
        </div>
        <ul className="header__nav">
          {user.isAuth && (
            <li>
              <NavLink to="/radar">Радар</NavLink>
            </li>
          )}
          {user.user?.admin && (
            <li>
              <NavLink to="/admin">Управление</NavLink>
            </li>
          )}

          {!user.isAuth && (
            <li>
              <NavLink to="/login">Войти</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
