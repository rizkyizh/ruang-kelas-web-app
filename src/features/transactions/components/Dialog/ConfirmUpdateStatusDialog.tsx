import { useTransactionCreation } from '@features/transactions/hooks/useTransactionCreation';
import { updateStatusTransactionConfirmationDialogAtom } from '@features/transactions/stores';
import {
  Box,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogTitle,
  Flex,
  Text
} from '@hudoro/admin';
import { useAtom } from 'jotai';
import { useState } from 'react';
interface IConfirmUpdateStatusDialog {
  resetDrawer: () => void;
}
export function ConfirmUpdateStatusDialog(props: IConfirmUpdateStatusDialog) {
  const [action, setAction] = useAtom(
    updateStatusTransactionConfirmationDialogAtom
  );

  const [status, setStatus] = useState<'success' | 'failed'>();

  const { updateStatus, isPending } = useTransactionCreation();

  const handleYes = async () => {
    if (status !== undefined) {
      await updateStatus(
        {
          statusUpdate: status
        },
        action.idTransactionSelected
      );
      console.log(action.idTransactionSelected);
      console.log(status);
      props.resetDrawer();
      handleOnHide();
    }
  };

  const handleOnHide = () => {
    setAction({ show: false, idTransactionSelected: 0 });
    setStatus(undefined);
  };

  return (
    <Dialog isShow={action.show} onHide={handleOnHide}>
      <DialogTitle>Update Status Transaction</DialogTitle>
      <DialogBody>
        <Flex gap="md">
          <Text fontSize="sm">keterangan:</Text>
          <Text fontSize="sm">Success: jika member lulus ujian pretest </Text>
          <Text fontSize="sm">Failed: jika member gagal ujian pretest</Text>
          <Box gap="sm" direction="row" align="center">
            <input
              type="radio"
              value="success"
              checked={status === 'success'}
              onChange={() => {
                setStatus('success');
              }}
            />
            <Text fontSize="sm" fontWeight="semibold">
              Success
            </Text>
            <input
              type="radio"
              value="failed"
              checked={status === 'failed'}
              onChange={() => {
                setStatus('failed');
              }}
            />
            <Text fontSize="sm" fontWeight="semibold">
              Failed
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
              <Button
                primary
                disabled={!status || isPending}
                onClick={handleYes}
              >
                {isPending ? 'Loading...' : 'Yes, Sure'}
              </Button>
            </Box>
          </Flex>
        </Box>
      </DialogFooter>
    </Dialog>
  );
}
