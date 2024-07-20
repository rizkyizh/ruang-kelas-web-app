import { atomWithReset } from 'jotai/utils';

export const confirmAddCourseDialogAtom = atomWithReset({
  show: false,
  isCourse: 0,
  nameCourse: ''
});
