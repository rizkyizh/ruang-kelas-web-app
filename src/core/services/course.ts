import { API_ENDPOINTS } from '@core/configs/app';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse } from '@core/libs/http/types';
import { CourseCreationModel, CourseModel } from '@core/models/course';
import { http } from '@hudoro/admin';

export const courseService = {
  get: http.get<ApiResponse<CourseModel[]>>(
    API_ENDPOINTS.course,
    initialOptionWithRefreshToken
  ),
  create: http.post<ApiResponse<CourseModel>, CourseCreationModel>(
    API_ENDPOINTS.course,
    initialOptionWithRefreshToken
  ),
  update: http.put<ApiResponse<CourseModel>, CourseCreationModel>(
    API_ENDPOINTS.course,
    initialOptionWithRefreshToken
  ),
  delete: http.delete<ApiResponse<CourseModel>>(
    API_ENDPOINTS.course,
    initialOptionWithRefreshToken
  )
};
