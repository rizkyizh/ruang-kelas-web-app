import { useMutation, useQueryClient } from '@tanstack/react-query';
import { handleErrorRoleForbidden } from '@features/_global/helper/errorHandler';
import { useNavigate } from 'react-router-dom';
import { ApiResponse, toast } from '@hudoro/admin';
import { UpdateStatusCourseCreationModel } from '@core/models/transaction';
import { transactionService } from '@core/services/transaction';
import { useHistories } from '@features/histories/hooks/useHistories';
import { useMembers } from '@features/members/hooks/useMembers';

type MUTATION_TYPE = 'create' | 'update' | 'delete' | 'update-status';
interface MutationVariables {
  type: MUTATION_TYPE;
  body?: UpdateStatusCourseCreationModel;
  id?: number;
}

export function useTransactionCreation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { refetch } = useHistories();
  const { refetch: refetchmember } = useMembers();

  const mutation = useMutation({
    mutationKey: ['mutation-transaction'],
    mutationFn: ({ type, body, id }: MutationVariables) => {
      switch (type) {
        default:
          return transactionService.updateStatusTransaction(body, {
            path: id?.toString()
          });
      }
    },
    onSuccess: res => {
      console.log('success', res);
      if (res?.status === false) {
        toast.danger(res?.messages[0]);
        return;
      }

      if (res?.status) {
        toast.success(res?.messages[0]);
        queryClient.invalidateQueries({
          queryKey: ['transaction-items']
        });
        refetch();
        refetchmember();
      }
    },
    onError: res => {
      const bd = res as ApiResponse;
      handleErrorRoleForbidden(bd, navigate);
      toast.danger(bd.error?.message);
    }
  });

  // const create = (data: CourseCreationModel) => {
  //   return mutation.mutateAsync({ type: 'create', body: { ...data } });
  // };
  //
  const updateStatus = (data: UpdateStatusCourseCreationModel, id: number) => {
    return mutation.mutateAsync({
      type: 'update-status',
      body: { ...data },
      id
    });
  };

  // const remove = (id: number) => {
  //   return mutation.mutateAsync({ type: 'delete', id });
  // };

  return {
    ...mutation,
    updateStatus
  };
}
