import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@features/authentication/hooks/useAuth';
import sigInImage from '@core/assets/svg/hero-bg.jpg';
import { AuthLayout } from '../components/AuthLayout';

const AuthView = () => {
  const auth = useAuth();

  if (auth.loading) return null;

  if (auth.accessToken) return <Navigate to="/customers" replace />;

  return (
    <AuthLayout coverImage={sigInImage}>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthView;
