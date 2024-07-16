import { useEffect, useState } from 'react';
import {
  deleteTokenOtpFromStorage,
  getAuthFromStorage,
  getTokenOtpFromStorage,
  saveAuthToStorage,
  saveTokenOtpToStorage
} from '../utils';
import { AuthModel, TokenForValidateOTPCreationModel } from '@core/models/auth';
import { useMutation } from '@tanstack/react-query';
import authService from '@core/services/auth';
import { APP_CONFIG } from '@core/configs/app';

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState<AuthModel | null>(null);

  useEffect(() => {
    setLoading(true);
    getAuthFromStorage()
      .then(data => setAuthData(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    ...authData,
    loading
  };
};

export function useRequestOTP() {
  const mutation = useMutation({
    mutationKey: ['request-otp'],
    mutationFn: (body: TokenForValidateOTPCreationModel) => {
      return authService.requestOTP(body, {
        headers: {
          'Application-Key': APP_CONFIG.key
        }
      });
    },
    onSuccess: (res, vars) => {
      if (res?.data?.token) {
        // secara otomatis save token di storage
        saveTokenOtpToStorage({ ...res.data, ...vars });
      }
    }
  });

  const request = (data: TokenForValidateOTPCreationModel) =>
    mutation.mutateAsync(data);

  const tryAgain = () =>
    getTokenOtpFromStorage().then(data =>
      mutation.mutateAsync({
        email: data?.email,
        phoneNumber: data?.phoneNumber,
        type: data?.type
      })
    );

  return {
    ...mutation,
    request,
    tryAgain
  };
}

export function useValidateOTP() {
  const mutation = useMutation({
    mutationKey: ['validate-otp'],
    mutationFn: async (otp: string) => {
      // get token dari storage
      const data = await getTokenOtpFromStorage();
      return authService.validateOTP(
        { token: data?.token, otp },
        {
          headers: {
            'Application-Key': APP_CONFIG.key
          }
        }
      );
    },
    onSuccess: res => {
      if (res?.data?.accessToken && res?.data?.refreshToken) {
        // hapus token otp dan save data auth
        deleteTokenOtpFromStorage();
        saveAuthToStorage(res.data);
      }
    }
  });

  const validate = (otp: string) => mutation.mutateAsync(otp);

  return {
    ...mutation,
    validate
  };
}
