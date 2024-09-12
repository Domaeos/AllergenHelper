import TextSection from '@/components/TextSection';
import Container from '@/components/Container';
import { Button } from "@headlessui/react";
import useForm from '@/hooks/useForm';
import { useState } from 'react';
import { SetStateAction } from 'react';
import { TRegisterData } from '@/types/types';

export default function RegisterForm() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [values, handleChange] = useForm(initialValues);
  const [errors, setErrors] = useState({ ...initialValues });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    validateRegistration(values, setErrors);
    e.preventDefault();
    console.log("onSubmit");
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    console.log(errors);
    setErrors(errors => {
      return {
        ...errors,
        [event.target.name]: "",
      }
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextSection
          label='Email'
          name='email'
          type='email'
          onFocus={handleFocus}
          value={values.email}
          handleChange={handleChange}
        />
        <TextSection
          label='Password'
          name='password'
          type='password'
          value={values.password}
          onFocus={handleFocus}
          handleChange={handleChange}
        />
        <TextSection
          name='confirmPassword'
          label='Confirm password'
          onFocus={handleFocus}
          type='password'
          value={values.confirmPassword}
          handleChange={handleChange}
        />
        <Button type="submit">Register</Button>
      </form>
      {errors && Object.values(errors).map(x => <div>{x}</div>)}
    </Container>
  )
}

function validateRegistration(values: TRegisterData, setErrors: React.Dispatch<SetStateAction<{}>>) {
  if (values.password!.length < 5) {
    setErrors(errors => {
      return {
        ...errors,
        password: "Please enter a password with at least 5 characters"
      }
    })
  }
  if (values.confirmPassword!.length < 5) {
    setErrors(errors => {
      return {
        ...errors,
        confirmPassword: "Please confirm your password"
      }
    })
  }
  if (values.confirmPassword !== values.password) {
    setErrors(errors => {
      return {
        ...errors,
        confirmPassword: "Passwords do not match"
      }
    })
  }
  if (values.email!.length === 0) {
    setErrors(errors => {
      return {
        ...errors,
        confirmPassword: "Please enter an email address",
      }
    })
  }
}