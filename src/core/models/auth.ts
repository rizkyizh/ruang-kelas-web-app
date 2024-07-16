export interface TokenForValidateOTPCreationModel {
  email?: string;
  phoneNumber?: string;
  type?: 'EMAIL' | 'WHATSAPP';
}

export interface TokenForValidateOTPModel {
  token?: string;
  exp?: string;
}

export interface AuthCreationModel {
  token?: string;
  otp?: string;
}

export interface AuthModel {
  authToken?: string;
  accessToken?: string;
  refreshToken: string;
}
