import { object, string } from 'yup';

export const registerSchema = object({
  email: string().required("Please enter an email address"),
  password: string().required("Please enter a password").min(5).max(255),
  confirmPassword: string().required("Please confirm your password").min(5).max(255)
});