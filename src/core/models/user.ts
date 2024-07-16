import { RoleModel } from './role';

export interface UserModel {
  id: number;
  username: string;
  password: string;
  createdAt: string;
  roles: RoleModel[];
  _enabled: boolean;
  _account_non_locked: boolean;
}

export interface UserCreationModel {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  isActive?: boolean;
}

export interface UsersAtomType {
  fullname: string;
  email: string;
  status: string;
  phoneNumber: string;
  applications:
    | {
        appName: string;
        role: string;
        status: string;
      }[]
    | [];
  department: string;
  division: {
    name: string;
    title: string;
  };
}

export interface UsersInterface {
  users: UsersAtomType[];
}

export type ApplicationsType = {
  appName: string;
  role: string;
  status: string;
};
export interface CategorySelected {
  role: string;
  department: string;
  division: string;
  title: string;
}

export interface AssignTitleUser {
  userId?: string;
  departmentManagementId?: number | null;
  departmentId?: number | null;
  divisionId?: number | null;
  titleOfDivisionId?: number | null;
  titleOfDepartmentId?: number | null;
}

export interface GetTitleUserByUserId {
  id: number;
  userId: string;
  division: {
    id: number;
    name: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  } | null;
  titleOfDivision: {
    id: number;
    name: string;
    isLeader: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  } | null;
  departmentManagement: {
    id: number;
    isProfitCenter: boolean;
    isActive: boolean;
    department: {
      id: number;
      name: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
    title: {
      id: number;
      name: string;
      isLeader: boolean;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
    };
  } | null;
}
