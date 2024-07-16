import { Box, Button, Input, Text, useForm } from '@hudoro/admin';
import { memo, useRef } from 'react';
import { EMAIL_REGEX } from '@core/libs/helpers';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
  email: ''
};

const FormLogin = memo(() => {
  const navigate = useNavigate();
  // const otp = useRequestOTP();

  const inputRef = useRef<HTMLInputElement>(null);
  const form = useForm(initialFormState, {
    validationCallback: (values, errors) => {
      if (!values.email) {
        errors.email = 'Email Required';
      } else if (!EMAIL_REGEX.test(values.email)) {
        errors.email = 'Invalid email format.';
      }

      return errors;
    }
  });

  // const disableNextButton = Boolean(form.errors.email || otp.isPending);

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
            Masuk
          </Text>
          <Text fontSize="lg" fontWeight="normal" fontFamily="Poppins">
            Masuk ke kelas dengan akunmu
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
              Username
            </Text>
            <Input
              id="username"
              name="username"
              onChange={onInputChange}
              value={form.values.email}
              ref={inputRef}
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
              value={form.values.email}
              ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            />
          </Box>
          <Box gap="sm" direction="row">
            <Text fontSize="md" fontWeight="normal" fontFamily="Poppins">
              Belum punya akun?
            </Text>
            <Text
              color="primary"
              fontSize="md"
              fontWeight="normal"
              fontFamily="Poppins"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/auth/register');
              }}
            >
              buat disini
            </Text>
          </Box>

          <Box gap="md">
            <Button type="submit" primary size="lg">
              Masuk
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
});

export default FormLogin;

{
  /*
            <Box gap="spacing-2">
              <Input
                name="email"
                leftIcon={<Envelope />}
                type="email"
                id="emailInput"
                onChange={onInputChange}
                value={form.values.email}
                placeholder="example@gmail.com"
                ref={inputRef}
                style={{
                  fontFamily: 'Poppins'
                }}
                status={form?.errors?.email ? 'error' : 'default'}
              />
              {form?.errors?.email && (
                <Text fontFamily="Poppins" color="error" fontSize="sm">
                  {form.errors.email}
                </Text>
              )}
            </Box> */
}
