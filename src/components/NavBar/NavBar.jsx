import { Link, NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import clsx from 'clsx';

const NavBar = () => {
  const activeLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const isLoggedIn = false;
  return (
    <nav className={s.nav}>
      <Navigation />
      <Link className={s.logo} to="/">
        <img
          src="/img/hero/logo@2x.webp"
          alt="Logo"
          className={s.logo}
          width="169"
          height="123"
        />
      </Link>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavLink className={activeLink} to="/authorization">
          Authorization
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;
