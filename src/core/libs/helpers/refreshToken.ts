import { APP_CONFIG } from '@core/configs/app';
import { AuthModel } from '@core/models/auth';
import { storage } from '../storage';
import { RequestApiOptions } from '@hudoro/admin';

export const getBearerToken = async () => {
  try {
    const authData = await storage.get<AuthModel>(APP_CONFIG.storage.auth);

    if (!authData?.token) {
      throw new Error('UNAUTHORIZE');
    }

    // const decodedToken = jwtDecode(`${authData?.token}`) as {
    //   exp: number;
    // };
    // const isExpiredAuthToken =
    // decodedToken?.exp && decodedToken.exp * 1000 < new Date().getTime();

    // if (isExpiredAuthToken) {
    //   if (!authData?.refreshToken) {
    //     throw new Error('UNAUTHORIZE');
    //   }
    //   const res = await refreshTokenService.get({
    //     bearerToken: authData.refreshToken
    //   });
    //
    //   if (!res?.data?.accessToken) {
    //     throw new Error('UNAUTHORIZE');
    //   }
    //
    //   if (res?.data?.accessToken) {
    //     authData = res.data;
    //     storage.save(APP_CONFIG.storage.auth, authData);
    //   }
    // }

    return authData;
  } catch (error) {
    // TODO: next ganti dengan logic react atau callback dari @hudoro/http;
    // window.location.pathname = '/login';
    await storage.delete(APP_CONFIG.storage.auth);
    window.location.reload();
    return null;
  }
};

export const initialOptionWithRefreshToken = async (
  requestOption?: RequestApiOptions
): Promise<RequestApiOptions> => {
  const authData = await getBearerToken();

  return {
    bearerToken: authData?.token,
    ...requestOption
  };
};
