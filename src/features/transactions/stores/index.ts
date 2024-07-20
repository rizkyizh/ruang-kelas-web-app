import { ISingleActionDrawerAtomModel } from '@features/_global/types';
import { atomWithReset } from 'jotai/utils';
import { IFormTransactionCreationModelState } from '../types';

export const transactionCreationDrawerAtom = atomWithReset<
  ISingleActionDrawerAtomModel<IFormTransactionCreationModelState>
>({
  show: false
});

export const transactionUpdateStatusConfirmationDialogAtom = atomWithReset({
  show: false,
  idTransactionSelected: 0
});
