import {
  ICreationDrawerAtomModel,
  IDeleteDialogConfirmation
} from '@features/_global/types';
import { atomWithReset } from 'jotai/utils';
import { IFormCourseCreationModelState } from '../types';

export const courseCreationDrawerAtom = atomWithReset<
  ICreationDrawerAtomModel<IFormCourseCreationModelState>
>({
  show: false,
  action: 'CREATE',
  dataState: {
    id: 0,
    thumbnail: '',
    title: '',
    instructor: '',
    description: '',
    price: '',
    periode: '',
    start: '',
    end: '',
    is_enabled: false,
    createdAt: '',
    category: {
      id: 0,
      name: ''
    }
  }
});

export const courseDeleteConfirmationDialogAtom =
  atomWithReset<IDeleteDialogConfirmation>({
    show: false,
    idItemSelected: 0,
    itemName: ''
  });
