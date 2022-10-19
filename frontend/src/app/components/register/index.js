import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AuthBox, ApiAlertStatus } from '../shared';
import RegistrationFooter from './RegistrationFooter';
import RegistrationForm from './RegistrationForm';
import { validateRegistrationForm } from '../../utils';
import { registerUser } from '../../apical';

const Register = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerStatus = useSelector(state => state.auth.status);
    const errorWhileLogin = useSelector(state => state.auth.error);
    const userDetails = useSelector(state => state.auth.userDetails);

    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [validationError, setValidationError] = useState([
        'Username should be between 3 to 12 characters',
        'Invalid email-id',
        'Password should be between 8 to 16 characters',
    ]);

    useEffect(() => {
        setValidationError(validateRegistrationForm({ email, username, password, rePassword }));
    }, [email, username, password, rePassword, setValidationError]);

    const handleRegFormSubmit = () => {
        dispatch(registerUser({ email, password, username }));
    };

    return (
        <AuthBox>
            <Typography variant="h5" sx={{ color: 'white' }}>
                {' '}
                Create an account
            </Typography>
            <RegistrationForm
                email={email}
                setEmail={setEmail}
                username={username}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                rePassword={rePassword}
                setRePassword={setRePassword}
            />
            <RegistrationFooter
                validationError={validationError}
                handleRegFormSubmit={handleRegFormSubmit}
            />
            <ApiAlertStatus
                apiStatus={registerStatus}
                successMessage={`We welcome you ${userDetails && userDetails.username} !`}
                successAction={() => navigate('/dashboard')}
                errorMessage={errorWhileLogin}
            />
        </AuthBox>
    );
};

export default Register;
