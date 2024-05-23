import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import s from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className={s.header}>
        <NavBar />
      </header>
      <main>
        <Outlet />
        {children}
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
