import LoginForm from '../../components/LoginForm/LoginForm';
import s from './AuthorizationPage.module.css';

const AuthorizationPage = () => {
  return (
    <section className={s.authSection}>
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
};

export default AuthorizationPage;
