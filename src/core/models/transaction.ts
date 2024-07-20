import { CourseModel } from './course';
import { MemberModel } from './member';

export interface addCourseCreationModel {
  courseId: number;
}

export interface TransactionModel {
  id: number;
  course: CourseModel;
  member: MemberModel;
  status: string;
  isRegistered: boolean;
  createdAt: string;
}

export interface UpdateStatusCourseCreationModel {
  statusUpdate: 'success' | 'failed' | 'process'; // success, process, failed
}
