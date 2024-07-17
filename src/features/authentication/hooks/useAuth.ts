import { useEffect, useState } from 'react';
import { getAuthFromStorage, saveAuthToStorage } from '../utils';
import { AuthCreationModel, AuthModel } from '@core/models/auth';
import { useMutation } from '@tanstack/react-query';
import authService from '@core/services/auth';

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

export function useLogin() {
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (body: AuthCreationModel) => {
      return authService.login(body);
    },
    onSuccess: res => {
      if (res?.status) {
        // secara otomatis save di storage
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

// export function useValidateOTP() {
//   const mutation = useMutation({
//     mutationKey: ['validate-otp'],
//     mutationFn: async (otp: string) => {
//       // get token dari storage
//       const data = await getTokenOtpFromStorage();
//       return authService.validateOTP(
//         { token: data?.token, otp },
//         {
//           headers: {
//             'Application-Key': APP_CONFIG.key
//           }
//         }
//       );
//     },
//     onSuccess: res => {
//       if (res?.data?.accessToken && res?.data?.refreshToken) {
//         // hapus token otp dan save data auth
//         deleteTokenOtpFromStorage();
//         saveAuthToStorage(res.data);
//       }
//     }
//   });
//
//   const validate = (otp: string) => mutation.mutateAsync(otp);
//
//   return {
//     ...mutation,
//     validate
//   };
// }
