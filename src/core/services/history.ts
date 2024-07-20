import { API_ENDPOINTS } from '@core/configs/app';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse } from '@core/libs/http/types';
import { HistoryModel } from '@core/models/history';
import { http } from '@hudoro/admin';

export const historyService = {
  getMyHistory: http.get<ApiResponse<HistoryModel>>(
    `${API_ENDPOINTS.history}/member`,
    initialOptionWithRefreshToken
  ),
  getHistories: http.get<ApiResponse<HistoryModel>>(
    `${API_ENDPOINTS.history}`,
    initialOptionWithRefreshToken
  )
};
