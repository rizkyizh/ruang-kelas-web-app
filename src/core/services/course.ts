import { API_ENDPOINTS } from '@core/configs/app';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse } from '@core/libs/http/types';
import {
  CourseCreationModel,
  CourseMemberModel,
  CourseModel
} from '@core/models/course';
import { TransactionModel } from '@core/models/transaction';
import { http } from '@hudoro/admin';

export const courseService = {
  getCatalogCourse: http.get<ApiResponse<CourseModel>>(API_ENDPOINTS.course, {
    withAppAuth: false
  }),
  get: http.get<ApiResponse<CourseModel>>(
    API_ENDPOINTS.course,
    initialOptionWithRefreshToken
  ),
  getById: http.get<ApiResponse<CourseModel>>(
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
  ),
  getMyCourses: http.get<ApiResponse<TransactionModel>>(
    `${API_ENDPOINTS.transaction}/course-registered`,
    initialOptionWithRefreshToken
  ),
  getCoursesMember: http.get<ApiResponse<CourseMemberModel>>(
    `${API_ENDPOINTS.course}/member`,
    initialOptionWithRefreshToken
  )
};
