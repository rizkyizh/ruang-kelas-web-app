import { Outlet } from 'react-router-dom';
import sigInImage from '@core/assets/svg/hero-bg.jpg';
import { AuthLayout } from '../components/AuthLayout';

const AuthView = () => {
  // const auth = useAuth();

  // if (auth.loading) return null;

  // if (auth.token) return <Navigate to="/" replace />;

  return (
    <AuthLayout coverImage={sigInImage}>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthView;
