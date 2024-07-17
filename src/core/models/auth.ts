export interface AuthCreationModel {
  username: string;
  password: string;
}

// export interface TokenForValidateOTPModel {
//   token?: string;
//   exp?: string;
// }
//
// export interface AuthCreationModel {
//   token?: string;
//   otp?: string;
// }

export interface AuthModel {
  // authToken?: string;
  // accessToken?: string;
  // refreshToken: string;
  token: string;
}
