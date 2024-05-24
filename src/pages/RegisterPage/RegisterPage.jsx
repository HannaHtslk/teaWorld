import RegisterForm from '../../components/RegisterForm/RegisterForm';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <section className={s.registration}>
      <div className="container">
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
