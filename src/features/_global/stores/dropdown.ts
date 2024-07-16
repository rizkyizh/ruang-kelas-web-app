import { atomWithReset } from 'jotai/utils';
import { IDropdownIsClickedAtom } from '../types';

export const dropdownGlobalStoreAtom = atomWithReset<IDropdownIsClickedAtom>({
  category: false
});
