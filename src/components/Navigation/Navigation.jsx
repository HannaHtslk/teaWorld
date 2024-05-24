import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const activeLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={activeLink} to="/assortment">
          Assortment
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={activeLink} to="/about">
          About us
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={activeLink} to="/cart">
          Cart
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
