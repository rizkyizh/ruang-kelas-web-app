import { TransactionModel } from './transaction';

export interface HistoryModel {
  id: number;
  date: string;
  status: string;
  transaction: TransactionModel;
}
