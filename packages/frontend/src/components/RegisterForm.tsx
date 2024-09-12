import TextSection from '@/components/TextSection';
import Container from '@/components/Container';
import { Button } from "@headlessui/react";
import useForm from '@/hooks/useForm';
import { registerSchema } from '@/schemas/schemas';

export default function RegisterForm() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [values, handleChange] = useForm(initialValues);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const validate = await registerSchema.validate(values, { abortEarly: false });
      console.log(validate);
    } catch (e) {
      console.log(e);
    }
    console.log("onSubmit");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit">Register</Button>
      </form>
    </Container>
  )
}