import { PrivilegeModel } from './privilege';

export interface RoleModel {
  id: number;
  name: string;
  privileges: PrivilegeModel[];
}
