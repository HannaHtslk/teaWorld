import { NavLink } from 'react-router-dom';

import UserMenu from '../UserMenu/UserMenu';

const NavBar = () => {
  const isLoggedIn = false;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/assortment">Assortment</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <li>
            <NavLink to="/authorization">Authorization</NavLink>
          </li>
        )}

        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
