import { RoleModel } from './role';

export interface AuthCreationModel {
  username: string;
  password: string;
}

export interface RegisterCreationModel {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponseData {
  id: number;
  username: string;
  password: string;
  createdAt: string;
  roles: RoleModel[];
  _enabled: boolean;
  _account_non_locked: boolean;
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
