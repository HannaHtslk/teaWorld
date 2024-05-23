import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to="/instructions">Instructions</NavLink>
      </li>
      <li>
        <NavLink to="/special">Special offers</NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
