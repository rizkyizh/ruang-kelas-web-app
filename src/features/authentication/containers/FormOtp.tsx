import {
  Box,
  Button,
  Text,
  Input,
  toast,
  useMediaQuery,
  Icon,
  ApiResponse
} from '@hudoro/admin';
import { useFormOTP } from '../hooks/useFormOTP';
import { To, useNavigate } from 'react-router-dom';
import { useRequestOTP, useValidateOTP } from '../hooks/useAuth';
import { diffSecond, formatTime } from '@core/libs/helpers';

export function FormOTP() {
  const desktop = useMediaQuery('md');
  const navigate = useNavigate();
  const {
    form,
    isSubmitDisabled,
    inputs,
    errors,
    countdown,
    handleInputChange,
    handleInputBackspace
  } = useFormOTP();

  const validateOTP = useValidateOTP();
  const requestOTP = useRequestOTP();

  const handleSendOtpAgain = async () => {
    try {
      const res = await requestOTP.tryAgain();
      if (res?.data?.exp) {
        const diff = diffSecond(res?.data?.exp as unknown as Date);
        if (diff > 0) {
          countdown.resetCountdown();
          countdown.setCount(diff);

          countdown.startCountdown();
        }
      }
    } catch (err: unknown) {
      toast.danger(
        (err as ApiResponse)?.error?.message ||
        (err as Error)?.message ||
        'Something wrong!'
      );
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    try {
      e?.preventDefault();
      await validateOTP.validate(form.values.otp.join(''));
      navigate('/customers', { replace: true, state: { userLoggedIn: true } });
    } catch (err: unknown) {
      if ((err as ApiResponse)?.error?.message) {
        form.setError('otp', (err as ApiResponse)?.error?.message as string);
      } else {
        toast.danger((err as Error)?.message);
      }
    }
  };

  const onBackHome = () => {
    navigate(-1 as To, { replace: true });
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = event => {
    // Regex yang hanya mengizinkan angka
    const regex = /^[0-9]$/;

    // Daftar tombol yang diizinkan selain angka
    const allowedKeys = [
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Backspace',
      'Delete',
      'Enter',
      'Tab'
    ];

    // Cek jika kunci yang ditekan bukan angka dan juga bukan salah satu dari allowedKeys
    if (!regex.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };

  const renderRequestAgain = () => {
    if (requestOTP.isPending) {
      return (
        <Text
          fontSize="md"
          fontWeight="medium"
          fontFamily="Poppins"
          color="gray-500"
          style={{ marginBottom: '2rem' }}
        >
          Please Wait ...
        </Text>
      );
    }

    return (
      <>
        {countdown.completed ? (
          <Text
            onClick={handleSendOtpAgain}
            fontSize="md"
            fontWeight="medium"
            fontFamily="Poppins"
            color="primary"
            style={{ marginBottom: '2rem', cursor: 'pointer' }}
          >
            Send OTP Again
          </Text>
        ) : (
          <>
            <Icon name="Clock" size="lg" />
            <Text
              fontSize="md"
              fontWeight="normal"
              fontFamily="Poppins"
              color="primary"
              style={{ marginBottom: '2rem' }}
            >
              {formatTime(countdown.count)}
            </Text>
          </>
        )}
      </>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <Box>
        <Box gap="sm">
          <Text
            fontWeight="semibold"
            fontSize="4xl"
            fontFamily="Poppins"
            color="text-dark"
          >
            Code OTP
          </Text>
          <Text fontSize="xl" fontWeight="normal" fontFamily="Poppins">
            we have sent the otp code to the email
          </Text>
          <Box direction="row" gap="sm">
            {renderRequestAgain()}
          </Box>
        </Box>

        <Box gap="sm">
          <Box
            display="flex"
            direction="row"
            justify="center"
            gap={desktop ? 'md' : 'sm'}
            align="center"
            data-class="otp-input"
          >
            {form.values.otp.map((value, index) => (
              <Input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                size="lg"
                placeholder="0"
                inputMode="decimal"
                pattern="\d*"
                onKeyDownCapture={handleKeyDown}
                onChange={e => handleInputChange(index, e)}
                onKeyDown={e => handleInputBackspace(index, e)}
                ref={input => (inputs.current[index] = input)}
                status={errors ? 'error' : 'default'}
              />
            ))}
          </Box>
          {form.errors.otp && (
            <Text
              fontFamily="Poppins"
              fontSize="md"
              fontWeight="normal"
              color="error"
            >
              {form.errors.otp}
            </Text>
          )}
        </Box>

        <Box gap="spacing-8" marginTop="lg">
          <Button
            disabled={
              isSubmitDisabled || validateOTP.isPending || requestOTP.isPending
            }
            type="submit"
            primary
            size="lg"
          >
            {validateOTP.isPending ? 'Sending...' : 'Next'}
          </Button>
          <Button
            onClick={onBackHome}
            type="button"
            secondary
            size="lg"
            iconLeft={<Icon name="ArrowLeft" size="lg" />}
          >
            <Text marginLeft="sm" fontFamily="Poppins">
              Back to Home
            </Text>
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default FormOTP;
