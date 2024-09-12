import useForm from '../hooks/useForm';
import TextSection from './TextSection';
import Container from './Container';
import { Button } from "@headlessui/react";

export default function RegisterForm() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [values, handleChange] = useForm(initialValues);

  return (
    <Container>
      <form>
        <TextSection
          label='Email'
          name='email'
          type='email'
          value={values.email}
          handleChange={handleChange}
        />
        <TextSection
          label='Password'
          name='password'
          type='password'
          value={values.password}
          handleChange={handleChange}
        />
        <TextSection
          name='confirmPassword'
          label='Confirm password'
          type='password'
          value={values.confirmPassword}
          handleChange={handleChange}
        />
        <Button>Register</Button>
      </form>
    </Container>
  )
}