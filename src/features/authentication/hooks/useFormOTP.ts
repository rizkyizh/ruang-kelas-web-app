import { useRef, useEffect, useCallback } from 'react';
import { getTokenOtpFromStorage } from '../utils';
import { diffSecond } from '@core/libs/helpers';
import { useForm, useCountdown } from '@hudoro/admin';

const DEFAULT_COUNT_START = 180; // 3 menit

const initialFormState = {
  otp: new Array(6).fill('')
};

export function useFormOTP() {
  const countdown = useCountdown({ countStart: 0 });

  const form = useForm<{ otp: string[] }>(initialFormState, {
    validationCallback: (_, errors) => {
      return errors;
    }
  });

  const inputs = useRef<(HTMLInputElement | null)[]>(new Array(6).fill(null));

  const isSubmitDisabled = Boolean(
    form.errors.otp || form.values.otp?.some(v => !v)
  );
  const errors = form.errors.otp;

  const handleInputChange = useCallback(
    (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const newOtp = [...form.values.otp];
      const input = event.target.value.replace(/\D/g, '');

      newOtp[index] = input.slice(0, 1);
      form.setValue('otp', newOtp);

      if (input && inputs.current[index + 1]) {
        inputs.current[index + 1]?.focus();
      }
    },
    [form]
  );

  const handleInputBackspace = useCallback(
    (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace' && index > 0) {
        form.setError('otp', '');
      }
      if (event.key === 'Backspace' && index > 0 && !form.values.otp[index]) {
        const newOtp = [...form.values.otp];
        newOtp[index - 1] = '';
        form.setValue('otp', newOtp);
        inputs.current[index - 1]?.focus();
      }
    },
    [form]
  );

  useEffect(() => {
    getTokenOtpFromStorage().then(data => {
      if (data?.exp) {
        const diff = diffSecond(new Date(data?.exp));
        if (diff > 0) {
          countdown.setCount(
            data?.exp ? diffSecond(new Date(data?.exp)) : DEFAULT_COUNT_START
          );
          countdown.startCountdown();
        }
      }
    });
  }, [countdown]);

  return {
    form,
    isSubmitDisabled,
    inputs,
    errors,
    handleInputChange,
    handleInputBackspace,
    countdown: { ...countdown }
  };
}
