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

export function useUserCurrentRole() {
  const auth = useAuth();

  const accessToken = auth.token;
  const query = useQuery({
    queryKey: ['role', { accessToken }],
    queryFn: async () => {
      const decode: DecodeToken = jwtDecode(accessToken as string);
      return {
        role: decode.role
      };
    }
  });
  const roleName = query.data?.role.name.toUpperCase() || '';
  return { role: roleName };
}

export enum ROLE {
  SUPER_ADMIN = 'SUPER_ADMIN'
}
