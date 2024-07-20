import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogTitle,
  Flex,
  Text
} from '@hudoro/admin';
import { useAtom } from 'jotai';
import { confirmAddCourseDialogAtom } from '../store';
import { RESET } from 'jotai/utils';
import { useState } from 'react';
import { useCatalogCourseCreation } from '../hooks/useCatalogCourseCreation';

export function ConfirmAddCourseDialog() {
  const [action, setAction] = useAtom(confirmAddCourseDialogAtom);

  const [isDone, setIsDone] = useState(false);

  const { addCoursebyMember } = useCatalogCourseCreation();

  const handleYes = async () => {
    await addCoursebyMember({
      courseId: action.isCourse
    });
    handleOnHide();
  };

  const handleOnHide = () => {
    setAction(RESET);
    setIsDone(false);
  };

  return (
    <Dialog isShow={action.show} onHide={handleOnHide}>
      <DialogTitle>Daftar Kelas ini</DialogTitle>
      <DialogBody>
        <Flex gap="md">
          <Text>
            Apakah kamu yakin ingin mendaftar di kelas{' '}
            <span
              style={{
                fontWeight: 'bold'
              }}
            >
              {action.nameCourse}
            </span>{' '}
            ini?
          </Text>
          <Box gap="sm" direction="row">
            <Checkbox
              checked={isDone}
              onChange={() => setIsDone(prev => !prev)}
            />
            <Text fontSize="sm" fontWeight="medium">
              Saya Sudah Mengerjakan Pre-test
            </Text>
          </Box>
        </Flex>
      </DialogBody>
      <DialogFooter>
        <Box display="flex" align="flex-end" justify="center">
          <Flex direction="row" gap="sm" align="center">
            <Box>
              <Button secondary onClick={handleOnHide}>
                Cancel
              </Button>
            </Box>
            <Box>
              <Button primary disabled={!isDone} onClick={handleYes}>
                Yes, Sure
              </Button>
            </Box>
          </Flex>
        </Box>
      </DialogFooter>
    </Dialog>
  );
}
