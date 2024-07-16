import { UserModel } from './user';

export interface MemberModel {
  id: number;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  nationally?: string;
  activeCourse: number;
  user: UserModel;
}
