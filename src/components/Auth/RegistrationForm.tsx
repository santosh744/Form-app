import {
  Grid,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import TextField from "../FormFields/TextField";
import { registrationSchema } from "../../utils/validationSchemas";
import { Formik, Field } from "formik";
import CustomButton from "../FormFields/CustomButton";

const RegistrationForm = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        gender: "",
      }}
      validationSchema={registrationSchema}
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
                Register
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField name="firstName" label="First Name" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField name="lastName" label="Last Name" required />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" label="Email" required />
            </Grid>

            <Grid item xs={12}>
              <TextField name="phoneNumber" label="Phone Number" required />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Field
                  as={Select}
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                >
                  <MenuItem value="">Select Gender</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Field>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="ConfirmPassword"
                type="password"
                required
              />
            </Grid>
            <Grid item xs={12}>
              {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={formik.isSubmitting}
          >
            Register
          </Button> */}
              <CustomButton disabled={formik.isSubmitting}>
                Register
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
