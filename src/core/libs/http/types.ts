export interface ApiResponse<T> {
  status: boolean;
  messages: string[];
  payload: T[];
}
