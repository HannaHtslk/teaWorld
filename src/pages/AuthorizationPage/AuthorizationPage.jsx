import { Link } from 'react-router-dom';

const AuthorizationPage = () => {
  return (
    <div>
      Not authorised? register here
      <Link to="/register">Registration</Link>
    </div>
  );
};

export default AuthorizationPage;
