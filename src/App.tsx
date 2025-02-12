import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import AuthPage from './components/Auth/AuthPage';
import RegistrationForm from './components/Auth/RegistrationForm';
import SignInForm from './components/Auth/SignInForm';
import { Navigate } from 'react-router-dom';
const App = () => {
  const handleSubmit = () => {
    // Handle successful submission (e.g., redirect, show message)
    console.log('Form submitted successfully');
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/signin">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
      <Routes>
  <Route path="/" element={<Navigate to="/register" replace />} />
  <Route
    path="/register"
    element={
      <AuthPage>
        <RegistrationForm onSubmit={handleSubmit} />
      </AuthPage>
    }
  />
  <Route
    path="/signin"
    element={
      <AuthPage>
        <SignInForm onSubmit={handleSubmit} />
      </AuthPage>
    }
  />
</Routes>
      </Container>
    </Router>
  );
};

export default App;