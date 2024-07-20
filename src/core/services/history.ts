import { API_ENDPOINTS } from '@core/configs/app';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse } from '@core/libs/http/types';
import { MyHistoryModel } from '@core/models/history';
import { http } from '@hudoro/admin';

export const historyService = {
  getMyHistory: http.get<ApiResponse<MyHistoryModel>>(
    `${API_ENDPOINTS.history}/member`,
    initialOptionWithRefreshToken
  )
};
