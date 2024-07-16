import { ApiResponse } from '@hudoro/admin';
import { ERROR_CODE } from '../types';

export function handleErrorRoleForbidden(
  body: ApiResponse,
  navigate: (path: string) => void
): void {
  if (
    body.status === 'error' &&
    body.error?.code === ERROR_CODE.FORBIDDEN &&
    body.error.message?.toUpperCase() === 'ANDA TIDAK MEMILIKI AKSES.'
  ) {
    navigate('/403');
  }
}
