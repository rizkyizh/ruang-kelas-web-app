/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly HSD_APP_KEY: string;
  readonly HSD_APP_NAME: string;
  readonly HSD_API_BASE_URL: string;
  readonly HSD_STORAGE_KEY: string;
  readonly HSD_STORAGE_AUTH: string;
  readonly HSD_STORAGE_OTP: string;
  readonly HSD_CSCAPI_URL: string;
  readonly HSD_CSCAPI_HEADER_KEY_NAME: string;
  readonly HSD_CSCAPI_HEADER_KEY_VALUE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
