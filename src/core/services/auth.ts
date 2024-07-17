import { API_ENDPOINTS } from '@core/configs/app';
import { ApiResponse } from '@core/libs/http/types';
import { AuthCreationModel, AuthModel } from '@core/models/auth';
import { http } from '@hudoro/admin';

const authService = {
  login: http.post<ApiResponse<AuthModel>, AuthCreationModel>(
    API_ENDPOINTS.authentication.login,
    { withAppAuth: false }
  )
  // validateOTP: http.post<ApiResponse<AuthModel>, AuthCreationModel>(
  //   API_ENDPOINTS.authentication.validateOTP,
  //   { withAppAuth: false }
  // )
};

export default authService;
