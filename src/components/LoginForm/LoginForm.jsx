import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email!').required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters!')
      .max(20, 'Up to 20 characters!')
      .required('Required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };
  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label className={s.label} htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className={s.input}
              type="email"
              name="email"
              id={emailFieldId}
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.wrapper}>
            <label className={s.label} htmlFor={passwordFieldId}>
              Password
            </label>
            <Field
              className={s.input}
              type="text"
              name="password"
              id={passwordFieldId}
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <div className={s.login}>
            <p className={s.label}>Do not have an account? </p>
            <Link className={s.link} to="/register">
              Register
            </Link>
          </div>

          <button className={s.btn} type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
