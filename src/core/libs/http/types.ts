export interface ApiResponse<T = unknown> {
  status: boolean;
  messages: string[];
  payload: T[];
}
