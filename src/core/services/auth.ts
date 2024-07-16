import { API_ENDPOINTS } from '@core/configs/app';
import {
  AuthCreationModel,
  AuthModel,
  TokenForValidateOTPCreationModel,
  TokenForValidateOTPModel
} from '@core/models/auth';
import { ApiResponse, http } from '@hudoro/admin';

const authService = {
  requestOTP: http.post<
    ApiResponse<TokenForValidateOTPModel>,
    TokenForValidateOTPCreationModel
  >(API_ENDPOINTS.authentication.requestOTP, { withAppAuth: false }),
  validateOTP: http.post<ApiResponse<AuthModel>, AuthCreationModel>(
    API_ENDPOINTS.authentication.validateOTP,
    { withAppAuth: false }
  )
};

export default authService;
