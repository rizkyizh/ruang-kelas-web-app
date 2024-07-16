import { API_ENDPOINTS } from '@core/configs/app';
import { UserCreationModel, UserModel } from '@core/models/user';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse, http } from '@hudoro/admin';

const userService = {
  get: http.get<ApiResponse<UserModel[]>>(
    API_ENDPOINTS.users,
    initialOptionWithRefreshToken
  ),
  getById: http.get<ApiResponse<UserModel>>(
    API_ENDPOINTS.users,
    initialOptionWithRefreshToken
  ),
  create: http.post<ApiResponse, UserCreationModel>(
    API_ENDPOINTS.users,
    initialOptionWithRefreshToken
  ),
  update: http.patch<ApiResponse, UserCreationModel>(
    API_ENDPOINTS.users,
    initialOptionWithRefreshToken
  ),
  delete: http.delete<ApiResponse>(
    API_ENDPOINTS.users,
    initialOptionWithRefreshToken
  )
};

export default userService;
