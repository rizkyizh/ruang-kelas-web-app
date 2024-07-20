import defaultImg from '@core/assets/svg/preview_img_default.svg';
import { TextFormLabel } from '@features/_global/components';
import { formatDate } from '@features/_global/helper';
import { STATUS_TRANSACTION } from '@features/my-transaction/helper';
import {
  transactionCreationDrawerAtom,
  transactionUpdateStatusConfirmationDialogAtom
} from '@features/transactions/stores';
import { Dot, DotSuccess } from '@features/transactions/views/Transactions';
import { Box, Button, Text, RightDrawer, Badges } from '@hudoro/admin';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useCallback } from 'react';
import { ConfirmUpdateStatusDialog } from '../Dialog/ConfirmUpdateStatusDialog';

export function TransactionCreationDrawer() {
  const [creationDrawer, setCreationDrawer] = useAtom(
    transactionCreationDrawerAtom
  );
  const [, setAction] = useAtom(transactionUpdateStatusConfirmationDialogAtom);
  // const form = useForm<IFormTransactionCreationModelState>(creationDrawer.dataState);

  const handleBackButton = useCallback(() => {
    setCreationDrawer(RESET);
  }, [setCreationDrawer]);

  const handleUpdateStatus = useCallback(async () => {
    setAction(prev => ({
      ...prev,
      show: true,
      idTransactionSelected:
        creationDrawer.dataState?.id !== undefined
          ? creationDrawer.dataState.id
          : 0
    }));
  }, [setAction, creationDrawer]);

  return (
    <>
      <RightDrawer show={creationDrawer.show} onHide={handleBackButton}>
        <Box gap="md" paddingBottom="spacing-16">
          <Text fontFamily="Poppins" fontWeight="medium" fontSize="lg">
            Update Status Transaction
          </Text>
          <Box gap="sm" direction="row" justify="space-between">
            <TextFormLabel>Id</TextFormLabel>
            <Text fontSize="sm" fontWeight="normal">
              {creationDrawer.dataState?.id}
            </Text>
          </Box>

          <Box gap="sm" direction="row" justify="space-between">
            <TextFormLabel>Status</TextFormLabel>
            {creationDrawer.dataState?.status === STATUS_TRANSACTION.SUCCESS ? (
              <Badges
                variant="success"
                text={STATUS_TRANSACTION.SUCCESS}
                size="md"
                border
                LeftIcon={DotSuccess}
              />
            ) : creationDrawer.dataState?.status ===
              STATUS_TRANSACTION.FAILED ? (
              <Badges
                variant="danger"
                text={STATUS_TRANSACTION.FAILED}
                size="md"
                border
                LeftIcon={Dot}
              />
            ) : (
              <Badges
                variant="info"
                text={STATUS_TRANSACTION.PROCESS}
                size="md"
                border
              />
            )}
          </Box>

          <Box gap="sm" direction="row" justify="space-between">
            <TextFormLabel>Tgl Transaction</TextFormLabel>
            <Text fontSize="sm" fontWeight="normal">
              {formatDate(creationDrawer.dataState?.createdAt ?? '')}
            </Text>
          </Box>
          <Box gap="sm">
            <TextFormLabel>Member Name</TextFormLabel>
            <Text fontSize="sm" fontWeight="normal">
              {creationDrawer.dataState?.member.name ?? '-'}
            </Text>
          </Box>
          <Box gap="sm">
            <TextFormLabel>Email</TextFormLabel>
            <Text fontSize="sm" fontWeight="normal">
              {creationDrawer.dataState?.member.email ?? '-'}
            </Text>
          </Box>

          <Text fontSize="sm" fontWeight="semibold">
            Course
          </Text>
          <Box
            style={{
              height: '162px',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <img
              src={creationDrawer.dataState?.course.thumbnail || defaultImg}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          <Box gap="sm">
            <TextFormLabel>Title</TextFormLabel>
            <Text fontSize="sm" fontWeight="normal">
              {creationDrawer.dataState?.course.title}
            </Text>
          </Box>
          <Box gap="sm">
            <TextFormLabel>Period</TextFormLabel>
            <Text fontSize="sm" fontWeight="normal">
              {creationDrawer.dataState?.course.periode} Bulan
            </Text>
          </Box>
          <Box gap="sm">
            <TextFormLabel>Price</TextFormLabel>
            <Text fontSize="sm" fontWeight="normal">
              {creationDrawer.dataState?.course.price}
            </Text>
          </Box>

          <Button success onClick={handleUpdateStatus}>
            Update
          </Button>
        </Box>
      </RightDrawer>
      <ConfirmUpdateStatusDialog resetDrawer={handleBackButton} />
    </>
  );
}
