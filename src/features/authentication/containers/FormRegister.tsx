import Envelope from '@core/assets/icons/Envelope';
import { Box, Button, Text, Input, useForm } from '@hudoro/admin';
import { useNavigate } from 'react-router-dom';

export function FormRegister() {
  // const desktop = useMediaQuery('md');
  const navigate = useNavigate();
  const form = useForm({ name: 'str' });
  // const {
  //   form,
  //   isSubmitDisabled,
  //   inputs,
  //   errors,
  //   countdown,
  //   handleInputChange,
  //   handleInputBackspace
  // } = useFormOTP();
  //
  // const validateOTP = useValidateOTP();
  // const requestOTP = useRequestOTP();
  //
  // const handleSendOtpAgain = async () => {
  //   try {
  //     const res = await requestOTP.tryAgain();
  //     if (res?.data?.exp) {
  //       const diff = diffSecond(res?.data?.exp as unknown as Date);
  //       if (diff > 0) {
  //         countdown.resetCountdown();
  //         countdown.setCount(diff);
  //
  //         countdown.startCountdown();
  //       }
  //     }
  //   } catch (err: unknown) {
  //     toast.danger(
  //       (err as ApiResponse)?.error?.message ||
  //       (err as Error)?.message ||
  //       'Something wrong!'
  //     );
  //   }
  // };
  //
  // const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
  //   try {
  //     e?.preventDefault();
  //     await validateOTP.validate(form.values.otp.join(''));
  //     navigate('/customers', { replace: true, state: { userLoggedIn: true } });
  //   } catch (err: unknown) {
  //     if ((err as ApiResponse)?.error?.message) {
  //       form.setError('otp', (err as ApiResponse)?.error?.message as string);
  //     } else {
  //       toast.danger((err as Error)?.message);
  //     }
  //   }
  // };
  //
  // const onBackHome = () => {
  //   navigate(-1 as To, { replace: true });
  // };
  //
  // const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = event => {
  //   // Regex yang hanya mengizinkan angka
  //   const regex = /^[0-9]$/;
  //
  //   // Daftar tombol yang diizinkan selain angka
  //   const allowedKeys = [
  //     'ArrowLeft',
  //     'ArrowRight',
  //     'ArrowUp',
  //     'ArrowDown',
  //     'Backspace',
  //     'Delete',
  //     'Enter',
  //     'Tab'
  //   ];
  //
  //   // Cek jika kunci yang ditekan bukan angka dan juga bukan salah satu dari allowedKeys
  //   if (!regex.test(event.key) && !allowedKeys.includes(event.key)) {
  //     event.preventDefault();
  //   }
  // };
  //
  // const renderRequestAgain = () => {
  //   if (requestOTP.isPending) {
  //     return (
  //       <Text
  //         fontSize="md"
  //         fontWeight="medium"
  //         fontFamily="Poppins"
  //         color="gray-500"
  //         style={{ marginBottom: '2rem' }}
  //       >
  //         Please Wait ...
  //       </Text>
  //     );
  //   }
  //
  //   return (
  //     <>
  //       {countdown.completed ? (
  //         <Text
  //           onClick={handleSendOtpAgain}
  //           fontSize="md"
  //           fontWeight="medium"
  //           fontFamily="Poppins"
  //           color="primary"
  //           style={{ marginBottom: '2rem', cursor: 'pointer' }}
  //         >
  //           Send OTP Again
  //         </Text>
  //       ) : (
  //         <>
  //           <Icon name="Clock" size="lg" />
  //           <Text
  //             fontSize="md"
  //             fontWeight="normal"
  //             fontFamily="Poppins"
  //             color="primary"
  //             style={{ marginBottom: '2rem' }}
  //           >
  //             {formatTime(countdown.count)}
  //           </Text>
  //         </>
  //       )}
  //     </>
  //   );
  // };
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value }
  }) => {
    form.setValue(name as keyof typeof form.values, value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e?.preventDefault();

    // try {
    //   await otp.request({
    //     email: form.values.email,
    //     phoneNumber: '',
    //     type: 'EMAIL'
    //   });
    //   return navigate('/otp');
    // } catch (err: unknown) {
    //   if ((err as ApiResponse)?.error?.message) {
    //     form.setError('email', (err as ApiResponse)?.error?.message as string);
    //   } else {
    //     toast.danger((err as Error)?.message || 'Something wrong');
    //   }
    // }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box gap="spacing-6">
        <Box gap="sm">
          <Text
            fontWeight="semibold"
            fontSize="4xl"
            fontFamily="Poppins"
            color="text-dark"
          >
            Buat Akun Baru
          </Text>
          <Text fontSize="lg" fontWeight="normal" fontFamily="Poppins">
            Lengkapi form di bawah ini dengan menggunakan data Anda yang valid
          </Text>
        </Box>
        <Box gap="md">
          <Box gap="sm">
            <Text
              fontFamily="Poppins"
              style={{
                color: 'var(--hsd-ui-text-secondary)'
              }}
            >
              Nama
            </Text>
            <Input
              id="name"
              name="name"
              onChange={onInputChange}
              // value={form.values.email}
              // ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            />
          </Box>
          <Box gap="sm">
            <Text
              fontFamily="Poppins"
              style={{
                color: 'var(--hsd-ui-text-secondary)'
              }}
            >
              Email
            </Text>
            <Input
              name="email"
              leftIcon={<Envelope />}
              type="email"
              id="emailInput"
              onChange={onInputChange}
              // value={form.values.email}
              placeholder="example@gmail.com"
              // ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            // status={form?.errors?.email ? 'error' : 'default'}
            />
          </Box>

          <Box gap="sm">
            <Text
              fontFamily="Poppins"
              style={{
                color: 'var(--hsd-ui-text-secondary)'
              }}
            >
              Username
            </Text>
            <Input
              id="username"
              name="username"
              onChange={onInputChange}
              // value={form.values.email}
              // ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            />
          </Box>
          <Box gap="sm">
            <Text
              fontFamily="Poppins"
              style={{
                color: 'var(--hsd-ui-text-secondary)'
              }}
            >
              Password
            </Text>
            <Input
              id="password"
              name="password"
              onChange={onInputChange}
              // value={form.values.email}
              // ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            />
          </Box>
          <Box gap="sm" direction="row">
            <Text fontSize="md" fontWeight="normal" fontFamily="Poppins">
              Sudah punya akun?
            </Text>
            <Text
              color="primary"
              fontSize="md"
              fontWeight="normal"
              fontFamily="Poppins"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/auth');
              }}
            >
              masuk disini
            </Text>
          </Box>

          <Box gap="md">
            <Button type="submit" primary size="lg">
              Daftar
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default FormRegister;
