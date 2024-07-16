import { CategoryModel } from './category';

export interface CourseModel {
  id: number;
  thumbnail: string;
  title: string;
  instructor: string;
  description: string;
  price: string;
  periode: string;
  start: string;
  end: string;
  is_enabled: boolean;
  createdAt: string;
  category: CategoryModel;
}

export interface CourseCreationModel {
  thumbnail: string;
  title: string;
  instructor: string;
  description: string;
  price: string;
  periode: string;
  is_enabled: boolean;
  start: string;
  end: string;
  category: CategoryModel;
}
