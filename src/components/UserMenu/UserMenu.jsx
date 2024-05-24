import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';
import clsx from 'clsx';

const UserMenu = () => {
  const activeLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={activeLink} to="/instructions">
            Instructions
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={activeLink} to="/special">
            Special offers
          </NavLink>
        </li>
      </ul>
      <button className={s.btn} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
