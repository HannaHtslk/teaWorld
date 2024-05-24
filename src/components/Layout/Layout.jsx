import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import s from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <NavBar />
        </div>
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
