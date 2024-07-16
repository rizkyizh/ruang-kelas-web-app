import { API_ENDPOINTS } from '@core/configs/app';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse } from '@core/libs/http/types';
import { MemberModel } from '@core/models/member';
import { http } from '@hudoro/admin';

export const memberService = {
  get: http.get<ApiResponse<MemberModel[]>>(
    API_ENDPOINTS.member,
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
