import { API_ENDPOINTS } from '@core/configs/app';
import { initialOptionWithRefreshToken } from '@core/libs/helpers/refreshToken';
import { ApiResponse } from '@core/libs/http/types';
import { TransactionModel } from '@core/models/transaction';
import { http } from '@hudoro/admin';

export const transactionService = {
  addCoursebyMember: http.post<ApiResponse>(
    API_ENDPOINTS.transaction,
    initialOptionWithRefreshToken
  ),
  getMyTransaction: http.get<ApiResponse<TransactionModel>>(
    `${API_ENDPOINTS.transaction}/member-transactions`,
    initialOptionWithRefreshToken
  ),
  getAllTransactions: http.get<ApiResponse<TransactionModel>>(
    `${API_ENDPOINTS.transaction}`,
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
