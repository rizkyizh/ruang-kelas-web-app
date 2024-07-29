import { Box, Button, Input, Text, useForm } from '@hudoro/admin';
import { memo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCreationModel } from '@core/models/auth';
import { useLogin } from '../hooks/useAuth';
import { emitAuthUpdated } from '@features/_global/helper';
const initialErrorState = {
  username: '',
  password: ''
};
const initialFormState = {
  username: '',
  password: ''
};

const FormLogin = memo(() => {
  const navigate = useNavigate();
  const { requestLogin, isPending } = useLogin();

  const [errors, setErrors] = useState(initialErrorState);
  const inputRef = useRef<HTMLInputElement>(null);
  const form = useForm<AuthCreationModel>(initialFormState);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value }
  }) => {
    form.setValue(name as keyof typeof form.values, value);
  };

  const validate = () => {
    const newErrors = { ...initialErrorState };

    if (!form.values.username) {
      newErrors.username = 'Username is required';
    }

    if (!form.values.password) {
      newErrors.password = 'Password is required';
    }

    const isValid = Object.values(newErrors).every(value => value === '');
    setErrors(isValid ? initialErrorState : newErrors);

    return isValid;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e?.preventDefault();
    if (!validate()) return;
    console.log(form.values);

    try {
      await requestLogin({
        username: form.values.username,
        password: form.values.password
      });
      emitAuthUpdated();
      navigate('/');
    } catch (err: unknown) {
      console.log(err);
    }
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
              value={form.values.username}
              ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            />
            {errors.username && (
              <Text fontFamily="Poppins" color="error" fontSize="sm">
                {errors.username}
              </Text>
            )}
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
              type="password"
              onChange={onInputChange}
              value={form.values.password}
              ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            />
            {errors.password && (
              <Text fontFamily="Poppins" color="error" fontSize="sm">
                {errors.password}
              </Text>
            )}
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
            <Button
              type="submit"
              primary
              size="lg"
              disabled={
                isPending || !form.values.username || !form.values.password
              }
            >
              {isPending ? 'Loading...' : 'Masuk'}
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
});

export default FormLogin;
