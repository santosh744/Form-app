import { Paper, Container } from '@mui/material';

const AuthPage = ({ children }: { children: React.ReactNode }) => (
  <Container maxWidth="sm">
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      {children}
    </Paper>
  </Container>
);

export default AuthPage;