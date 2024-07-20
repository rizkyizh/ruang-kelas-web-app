import { MyTransactionModel } from './transaction';

export interface MyHistoryModel {
  id: number;
  date: string;
  status: string;
  transaction: MyTransactionModel;
}
