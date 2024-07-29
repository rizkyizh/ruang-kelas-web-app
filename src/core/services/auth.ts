import { API_ENDPOINTS } from '@core/configs/app';
import { ApiResponse } from '@core/libs/http/types';
import {
  AuthCreationModel,
  AuthModel,
  RegisterCreationModel,
  RegisterResponseData
} from '@core/models/auth';
import { http } from '@hudoro/admin';

const authService = {
  login: http.post<ApiResponse<AuthModel>, AuthCreationModel>(
    API_ENDPOINTS.authentication.login,
    { withAppAuth: false }
  ),
  register: http.post<ApiResponse<RegisterResponseData>, RegisterCreationModel>(
    API_ENDPOINTS.authentication.register,
    { withAppAuth: false }
  )
};

export default authService;
