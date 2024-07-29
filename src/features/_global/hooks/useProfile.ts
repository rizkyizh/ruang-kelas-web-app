import { useAuth } from '@features/authentication/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { DecodeToken } from '../types';

export function useProfile() {
  const auth = useAuth();
  const accessToken = auth.token;

  const query = useQuery({
    queryKey: ['profile', accessToken],
    queryFn: async () => {
      const decode: DecodeToken = jwtDecode(accessToken as string);
      return {
        ...decode
      };
    }
  });

  return {
    ...query,
    items: query.data
  };
}
