import { TextField as MuiTextField } from '@mui/material';
import { useField } from 'formik';

interface TextFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

const TextField = ({ name, label, type = 'text', required = false }: TextFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <MuiTextField
      {...field}
      label={label}
      type={type}
      required={required}
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
      fullWidth
      margin="normal"
    />
  );
};

export default TextField;
