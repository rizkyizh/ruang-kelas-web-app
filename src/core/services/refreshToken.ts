import { API_ENDPOINTS } from '@core/configs/app';
import { AuthModel } from '@core/models/auth';
import { ApiResponse, http } from '@hudoro/admin';

const refreshTokenService = {
  get: http.get<ApiResponse<AuthModel>>(API_ENDPOINTS.refreshToken)
};
export default refreshTokenService;
