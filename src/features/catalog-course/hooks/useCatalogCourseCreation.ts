import { useMutation } from '@tanstack/react-query';
import { handleErrorRoleForbidden } from '@features/_global/helper/errorHandler';
import { useNavigate } from 'react-router-dom';
import { ApiResponse, toast } from '@hudoro/admin';
import { addCourseCreationModel } from '@core/models/transaction';
import { transactionService } from '@core/services/transaction';
import { useMyhistories } from '@features/my-histories/hooks/useMyHistories';
import { useMyTransaction } from '@features/my-transaction/hooks/useMyTransaction';

type MUTATION_TYPE = 'create' | 'update' | 'delete';
interface MutationVariables {
  type: MUTATION_TYPE;
  body?: unknown | addCourseCreationModel;
  id?: number;
}

export function useCatalogCourseCreation() {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();
  const { refetch: refetchHistory } = useMyhistories();
  const { refetch } = useMyTransaction();

  const mutation = useMutation({
    mutationKey: ['mutation-add-catalog-course'],
    mutationFn: ({ type, body, id }: MutationVariables) => {
      switch (type) {
        default:
          return transactionService.addCoursebyMember(body, {
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
        refetchHistory();
        refetch();
      }
    },
    onError: res => {
      const bd = res as ApiResponse;
      handleErrorRoleForbidden(bd, navigate);
      toast.danger(bd.error?.message);
    }
  });

  const addCoursebyMember = (data: addCourseCreationModel) => {
    return mutation.mutateAsync({ type: 'create', body: { ...data } });
  };

  // const update = (data: CourseCreationModel, id: number) => {
  //   return mutation.mutateAsync({ type: 'update', body: { ...data }, id });
  // };
  //
  // const remove = (id: number) => {
  //   return mutation.mutateAsync({ type: 'delete', id });
  // };

  return {
    ...mutation,
    addCoursebyMember
    // update,
    // delete: remove
  };
}
