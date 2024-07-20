import { TransactionModel } from './transaction';

export interface MyHistoryModel {
  id: number;
  date: string;
  status: string;
  transaction: TransactionModel;
}
