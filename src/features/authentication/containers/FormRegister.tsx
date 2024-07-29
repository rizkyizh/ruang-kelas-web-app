import Envelope from '@core/assets/icons/Envelope';
import { isEmail } from '@core/libs/helpers';
import { RegisterCreationModel } from '@core/models/auth';
import { Box, Button, Text, Input, useForm } from '@hudoro/admin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useFormOTP';

const initialErrorState = {
  name: '',
  email: '',
  password: '',
  username: ''
};

export function FormRegister() {
  const navigate = useNavigate();
  const form = useForm<RegisterCreationModel>(initialErrorState);
  const [errors, setErrors] = useState(initialErrorState);

  const validate = () => {
    const newErrors = { ...initialErrorState };

    if (!form.values.name) {
      newErrors.name = 'Name is required';
    }
    if (!form.values.email) {
      newErrors.email = 'email is required';
    }

    if (form.values.email && !isEmail(form.values.email)) {
      newErrors.email = 'email invalid';
    }

    if (!form.values.password) {
      newErrors.password = 'Password is required';
    }
    if (!form.values.username) {
      newErrors.username = 'username is required';
    }

    const isValid = Object.values(newErrors).every(value => value === '');
    setErrors(isValid ? initialErrorState : newErrors);

    return isValid;
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value }
  }) => {
    if (name === 'name') {
      errors.name = '';
    }

    if (name === 'email') {
      errors.email = '';
    }
    if (name === 'username') {
      errors.username = '';
    }
    if (name === 'password') {
      errors.password = '';
    }

    form.setValue(name as keyof typeof form.values, value);
  };

  const { isPending, register } = useRegister();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e?.preventDefault();

    if (!validate()) return;
    console.log(form.values);

    try {
      await register({
        name: form.values.name,
        email: form.values.email,
        username: form.values.username,
        password: form.values.password
      });
      return navigate('/auth');
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
              value={form.values.name}
              // ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
            />
            {errors.name && (
              <Text fontFamily="Poppins" color="error" fontSize="sm">
                {errors.name}
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
              Email
            </Text>
            <Input
              name="email"
              leftIcon={<Envelope />}
              type="email"
              id="emailInput"
              onChange={onInputChange}
              value={form.values.email}
              placeholder="example@gmail.com"
              // ref={inputRef}
              style={{
                fontFamily: 'Poppins'
              }}
              // status={form?.errors?.email ? 'error' : 'default'}
            />
            {errors.email && (
              <Text fontFamily="Poppins" color="error" fontSize="sm">
                {errors.email}
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
              Username
            </Text>
            <Input
              id="username"
              name="username"
              onChange={onInputChange}
              value={form.values.username}
              // ref={inputRef}
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
              // ref={inputRef}
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
            <Button
              type="submit"
              primary
              size="lg"
              disabled={
                isPending ||
                !form.values.name ||
                !form.values.password ||
                !form.values.username ||
                !form.values.email
              }
            >
              {isPending ? 'Loading...' : 'Daftar'}
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default FormRegister;
