import { useToast } from '@chakra-ui/react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { getSignIn } from '../Redux/action';


const defaultTheme = createTheme();

export default function SignIn() {
  const dispatch=useDispatch();
    const toast  =  useToast();
    const navigate = useNavigate();
  const handleSubmit =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
        email: data.get('email'),
        password: data.get('password'),
      };

    try {
        const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Users`);
        if (response.ok) {
          const users = await response.json();
          const userExists = users.some(
            (user) => user.email === formData.email && user.password === formData.password
          );
          if (userExists) {
            dispatch(getSignIn());
            console.log('Authentication successful!');
            toast({
                title: 'Login successful',
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            // Handle any further actions after successful authentication
            navigate("/")
          } else {
            console.log('Authentication failed: Invalid email or password');
            toast({
                title: 'Invalid credentials',
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
            // Handle authentication failure
          }
        } else {
          console.log('Error:', response.status);
          toast({
            title: 'Something went wrong',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          // Handle any other errors during data retrieval
        }
      } catch (error) {
        console.log('Error:', error);
        // Handle any other errors that occurred during authentication
      }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 10
          }}
          
        >
          <Avatar sx={{ m: 1, bgcolor: '#404040' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
               <Link  as={RouterLink} to="/signup" variant="body2"  sx={{ color: '#1976d2' }} >
                {"Don't have an account? Sign Up"}
</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}