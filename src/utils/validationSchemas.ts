import * as yup from 'yup';

export const registrationSchema = yup.object({
  firstName: yup.string().min(3,'Atleast 3 characters required').required('First Name is required'),
  lastName: yup.string().min(3,'Atlease 3 characters Required').required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword:yup.string().oneOf([yup.ref('password')],'Passwords must match').required('Confirm password is required'),
  gender: yup.string().required('Gender is required'),
});

export const signInSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});