import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={s.link} to="/instructions">
            Instructions
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={s.link} to="/special">
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
