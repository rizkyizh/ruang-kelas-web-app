import { TransactionModel } from '@core/models/transaction';

export interface IFormTransactionCreationModelState extends TransactionModel {
  // Omit<CourseModel, 'is_enabled'>
  // is_enabled: boolean;
}
