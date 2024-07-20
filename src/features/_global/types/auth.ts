export enum autorities {
  ROLE_ADMIN = 'ROLE_ADMIN'
}

export interface DecodeToken {
  autorities: string[];
  email: string;
  sub: string;
  iat: number;
  exp: number;
  name: string;
}
