import { APP_CONFIG } from '@core/configs/app';
import { storage } from '@core/libs/storage';
import {
  AuthModel
  // TokenForValidateOTPCreationModel,
  // TokenForValidateOTPModel
} from '@core/models/auth';

export const getAuthFromStorage = () =>
  storage.get<AuthModel>(APP_CONFIG.storage.auth);

export const saveAuthToStorage = (authData: AuthModel) =>
  storage.save(APP_CONFIG.storage.auth, authData);

export const deleteAuthFromStorage = () =>
  storage.delete(APP_CONFIG.storage.auth);

// export const saveTokenOtpToStorage = (
//   data: TokenForValidateOTPModel & TokenForValidateOTPCreationModel
// ) => storage.save<TokenForValidateOTPModel>(APP_CONFIG.storage.otp, data);
// export const getTokenOtpFromStorage = () =>
//   storage.get<TokenForValidateOTPModel & TokenForValidateOTPCreationModel>(
//     APP_CONFIG.storage.otp
//   );
// export const deleteTokenOtpFromStorage = () =>
//   storage.delete(APP_CONFIG.storage.otp);
