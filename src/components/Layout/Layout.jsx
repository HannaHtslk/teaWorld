import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import s from './Layout.module.css';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <NavBar />
        </div>
      </header>
      <main>
        <Outlet />
        {children}
      </main>
      <footer className={s.footer}>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;
