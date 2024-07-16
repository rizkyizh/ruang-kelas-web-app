import { useMutation, useQueryClient } from '@tanstack/react-query';
import { handleErrorRoleForbidden } from '@features/_global/helper/errorHandler';
import { useNavigate } from 'react-router-dom';
import { ApiResponse, toast } from '@hudoro/admin';
import { CourseCreationModel } from '@core/models/course';
import { courseService } from '@core/services/course';

type MUTATION_TYPE = 'create' | 'update' | 'delete';
interface MutationVariables {
  type: MUTATION_TYPE;
  body?: CourseCreationModel;
  id?: number;
}

export function useCourseCreation() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ['mutation-businessType'],
    mutationFn: ({ type, body, id }: MutationVariables) => {
      switch (type) {
        case 'update':
          return courseService.update(body, { path: id?.toString() });
        case 'delete':
          return courseService.delete({ path: id?.toString() });
        default:
          return courseService.create(body);
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
          queryKey: ['course-items']
        });
      }
    },
    onError: res => {
      const bd = res as ApiResponse;
      handleErrorRoleForbidden(bd, navigate);
      toast.danger(bd.error?.message);
    }
  });

  const create = (data: CourseCreationModel) => {
    return mutation.mutateAsync({ type: 'create', body: { ...data } });
  };

  const update = (data: CourseCreationModel, id: number) => {
    return mutation.mutateAsync({ type: 'update', body: { ...data }, id });
  };

  const remove = (id: number) => {
    return mutation.mutateAsync({ type: 'delete', id });
  };

  return {
    ...mutation,
    create,
    update,
    delete: remove
  };
}
