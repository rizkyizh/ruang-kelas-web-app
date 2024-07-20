import { ISingleActionDrawerAtomModel } from '@features/_global/types';
import { atomWithReset } from 'jotai/utils';
import { IFormTransactionCreationModelState } from '../types';
import { atom } from 'jotai';

export const transactionCreationDrawerAtom = atomWithReset<
  ISingleActionDrawerAtomModel<IFormTransactionCreationModelState>
>({
  show: false
});

export const updateStatusTransactionConfirmationDialogAtom = atom({
  show: false,
  idTransactionSelected: 0
});
