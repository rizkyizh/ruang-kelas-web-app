import { RegisterCreationModel } from '@core/models/auth';
import authService from '@core/services/auth';
import { toast } from '@hudoro/admin';
import { useMutation } from '@tanstack/react-query';

export function useRegister() {
  const mutation = useMutation({
    mutationKey: ['mutation-businessType'],
    mutationFn: (body: RegisterCreationModel) => authService.register(body),
    onSuccess: res => {
      console.log('success', res);

      if (res?.status) {
        toast.success(res?.messages[0]);
      }
    },
    onError: res => {
      toast.danger(res.message);
    }
  });

  const register = (data: RegisterCreationModel) => {
    return mutation.mutateAsync({ ...data });
  };

  return { ...mutation, register };
}
