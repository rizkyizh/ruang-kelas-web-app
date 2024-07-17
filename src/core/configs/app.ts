export const APP_CONFIG = {
  key: import.meta.env.RK_APP_KEY,
  name: import.meta.env.RK_APP_NAME,
  api: {
    baseUrl: import.meta.env.RK_API_BASE_URL
  },
  storage: {
    // otp: import.meta.env.RK_STORAGE_OTP,
    auth: import.meta.env.RK_STORAGE_AUTH,
    key: import.meta.env.RK_STORAGE_KEY
  }
};

export const API_ENDPOINTS = {
  users: `${APP_CONFIG.api.baseUrl}/users`,
  authentication: {
    login: `${APP_CONFIG.api.baseUrl}/login`,
    register: `${APP_CONFIG.api.baseUrl}/register`
  },
  refreshToken: `${APP_CONFIG.api.baseUrl}/refresh-token`,
  businessType: `${APP_CONFIG.api.baseUrl}/business-entity-type`,
  member: `${APP_CONFIG.api.baseUrl}/member`,
  course: `${APP_CONFIG.api.baseUrl}/course`,
  category: `${APP_CONFIG.api.baseUrl}/course/category`
};
