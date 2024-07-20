import { useCourseCreation } from '@features/courses/hooks/useCourseCreation';
import { courseDeleteConfirmationDialogAtom } from '@features/courses/stores';
import {
  Box,
  Button,
  Text,
  Dialog,
  DialogTitle,
  DialogBody,
  DialogFooter
} from '@hudoro/admin';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';

export function CourseDeleteConfirmationDialog() {
  const [deleteConfirmationDialog, setDeleteConfirmationDialog] = useAtom(
    courseDeleteConfirmationDialogAtom
  );

  const { delete: deleteItem } = useCourseCreation();

  const handleDeleteConfirm = () => {
    deleteItem(Number(deleteConfirmationDialog.idItemSelected));
    console.log(deleteConfirmationDialog.idItemSelected);
    setDeleteConfirmationDialog(RESET);
  };

  const handleOnHide = () => {
    setDeleteConfirmationDialog(RESET);
  };

  return (
    <Dialog isShow={deleteConfirmationDialog.show} onHide={handleOnHide}>
      <DialogTitle danger>
        <Text fontSize="md" fontWeight="medium">
          Delete Course: {deleteConfirmationDialog.itemName}
        </Text>
      </DialogTitle>
      <DialogBody>
        <Text fontSize="md" lineHeight="leading-6">
          This will delete everything related to this Course. Are you sure want
          to delete?
        </Text>
      </DialogBody>
      <DialogFooter>
        <Box display="flex" direction="row" justify="flex-end">
          <Box
            display="flex"
            direction="row"
            justify="flex-end"
            width="width-1-2"
            gap="sm"
          >
            <Button secondary onClick={handleOnHide} size="md" fullWidth>
              No
            </Button>
            <Button danger onClick={handleDeleteConfirm} size="md" fullWidth>
              Yes, Sure
            </Button>
          </Box>
        </Box>
      </DialogFooter>
    </Dialog>
  );
}
