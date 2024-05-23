import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import AssortmentPage from './pages/AssortmentPage/AssortmentPage';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import SpecialPage from './pages/SpecialPage/SpecialPage';
import InstructionsPage from './pages/InstructionsPage/InstructionsPage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="assortment" element={<AssortmentPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="authorization" element={<AuthorizationPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="special" element={<SpecialPage />} />
        <Route path="instructions" element={<InstructionsPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
