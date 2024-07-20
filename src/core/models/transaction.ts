import { CourseModel } from './course';
import { MemberModel } from './member';

export interface addCourseCreationModel {
  courseId: number;
}

export interface MyTransactionModel {
  id: number;
  course: CourseModel;
  member: MemberModel;
  status: string;
  isRegistered: boolean;
  createdAt: string;
}
