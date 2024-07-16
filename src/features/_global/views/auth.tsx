import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@features/authentication/hooks/useAuth';
import { AuthLayout, useApp } from '@hudoro/admin';
import sigInImage from '@core/assets/svg/SignIn-img.svg';

const AuthView = () => {
  const auth = useAuth();
  const app = useApp();

  if (auth.loading) return null;

  if (auth.accessToken) return <Navigate to="/customers" replace />;

  return (
    <AuthLayout logo={app.logo} coverImage={sigInImage}>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthView;
