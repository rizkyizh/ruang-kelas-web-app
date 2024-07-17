import { useEffect, useState } from 'react';
import { getAuthFromStorage, saveAuthToStorage } from '../utils';
import { AuthCreationModel, AuthModel } from '@core/models/auth';
import { useMutation } from '@tanstack/react-query';
import authService from '@core/services/auth';
import { AUTH_UPDATED_EVENT } from '@features/_global/helper';

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState<AuthModel | null>(null);

  const fetchAuthData = () => {
    setLoading(true);
    getAuthFromStorage()
      .then(data => setAuthData(data))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAuthData();
    const handleAuthUpdated = () => {
      fetchAuthData();
    };

    window.addEventListener(AUTH_UPDATED_EVENT, handleAuthUpdated);

    return () => {
      window.removeEventListener(AUTH_UPDATED_EVENT, handleAuthUpdated);
    };
  }, []);

  return {
    ...authData,
    loading
  };
};

export function useLogin() {
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (body: AuthCreationModel) => {
      return authService.login(body);
    },
    onSuccess: res => {
      if (res?.status) {
        saveAuthToStorage({ ...res.payload[0] });
      }
    }
  });

  const requestLogin = (data: AuthCreationModel) => mutation.mutateAsync(data);

  return {
    ...mutation,
    requestLogin
  };
}
