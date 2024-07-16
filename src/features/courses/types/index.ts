import { CourseModel } from '@core/models/course';

export interface IFormCourseCreationModelState extends CourseModel {
  // Omit<CourseModel, 'is_enabled'>
  // is_enabled: boolean;
}
