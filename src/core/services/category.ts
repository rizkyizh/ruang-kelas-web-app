import { API_ENDPOINTS } from '@core/configs/app';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse } from '@core/libs/http/types';
import { CategoryModel } from '@core/models/category';
import { http } from '@hudoro/admin';

export const categoryService = {
  get: http.get<ApiResponse<CategoryModel>>(
    API_ENDPOINTS.category,
    initialOptionWithRefreshToken
  )
  // create: http.post<ApiResponse, BusinessTypeCreationModel>(
  //   API_ENDPOINTS.businessType,
  //   initialOptionWithRefreshToken
  // ),
  // update: http.patch<ApiResponse, BusinessTypeCreationModel>(
  //   API_ENDPOINTS.businessType,
  //   initialOptionWithRefreshToken
  // ),
  // delete: http.delete<ApiResponse>(
  //   API_ENDPOINTS.businessType,
  //   initialOptionWithRefreshToken
  // )
};
