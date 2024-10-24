import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useUserInfo } from '@/store/UserSlice';
import Button from '@/ui/Button/Button';
import { useLogout } from './api/logoutRequest';

const Header = () => {
  const user = useUserInfo();
  const logout = useLogout();

  const onLogoutClick = () => {
    logout();
  };

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
          {user.isAuth && (
            <Button onClick={onLogoutClick} size="medium">
              Выйти
            </Button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
