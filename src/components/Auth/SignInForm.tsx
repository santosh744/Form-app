import {  Grid, Typography } from '@mui/material';
import TextField from '../FormFields/TextField';
import { signInSchema } from '../../utils/validationSchemas';
import { Formik } from 'formik'
import CustomButton from '../FormFields/CustomButton';

const SignInForm = ({ onSubmit }: { onSubmit: () => void }) => {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          console.log(values);
          onSubmit();
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField name="email" label="Email" required />
        </Grid>
        <Grid item xs={12}>
          <TextField name="password" label="Password" type="password" required />
        </Grid>
        <Grid item xs={12}>
          <CustomButton disabled={formik.isSubmitting}>
            Sign In
          </CustomButton>
            </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    );
  };

export default SignInForm;