import { useAuth } from '@features/authentication/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { DecodeToken } from '../types';

export function useUserCurrentRole() {
  const auth = useAuth();

  const accessToken = auth.token;
  const query = useQuery({
    queryKey: ['role', { accessToken }],
    queryFn: async () => {
      const decode: DecodeToken = jwtDecode(accessToken as string);
      return {
        roles: decode.autorities
      };
    }
  });
  const roleName = query.data?.roles.at(0) || '';
  return { role: roleName };
}
