import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <header>
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
