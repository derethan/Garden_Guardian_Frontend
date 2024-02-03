/************************************************ 
*   Login /login page for the application
*************************************************/
// Import necessary libraries
import { Container } from '@mui/material';
import LoginForm from '../components/LoginForm';


export default function Login() {
    return (
        <Container maxWidth='sm'>
            <LoginForm />
        </Container>

    );
}