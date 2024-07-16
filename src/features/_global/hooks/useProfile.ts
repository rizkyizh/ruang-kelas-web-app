import userService from '@core/services/user';
import { useAuth } from '@features/authentication/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';

interface DecodeToken {
  exp: number;
  iat: number;
  type: string;
  userId: string;
  role: {
    id: number;
    name: string;
  };
}

export function useProfile() {
  const auth = useAuth();
  const accessToken = auth.accessToken;

  const query = useQuery({
    queryKey: ['profile', accessToken],
    queryFn: async () => {
      const decode: DecodeToken = jwtDecode(accessToken as string);
      const userData = await userService.getById({ path: decode.userId });
      return {
        ...userData,
        role: decode.role
      };
    }
  });

  return query;
}
