import { Link, NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';

const NavBar = () => {
  const isLoggedIn = true;
  return (
    <nav className={s.nav}>
      <Navigation />
      <Link className={s.logo} to="/">
        <img
          src="/img/hero/logo@2x.png"
          alt="Logo"
          className={s.logo}
          width="169"
          height="123"
        />
      </Link>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <NavLink className={s.link} to="/authorization">
          Authorization
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;
