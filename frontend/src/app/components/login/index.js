import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthBox, ApiAlertStatus } from '../shared';
import { validateLoginForm } from '../../utils';
import LoginFooter from './LoginFooter';
import LoginForm from './LoginForm';
import LoginPageHeader from './LoginHeader';
import { userLogin } from '../../apical';

const Login = props => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const loginStatus = useSelector(state => state.auth.status);
    const errorWhileLogin = useSelector(state => state.auth.error);
    const userDetails = useSelector(state => state.auth.userDetails);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState([
        'Invalid email-id',
        'Password should be between 8 to 16 characters',
    ]);

    useEffect(() => {
        setValidationError(validateLoginForm({ email, password }));
    }, [email, password, setValidationError]);

    const handleLoginFormSubmit = () => {
        dispatch(userLogin({ email, password }));
    };

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <LoginFooter
                validationError={validationError}
                handleLoginFormSubmit={handleLoginFormSubmit}
            />
            <ApiAlertStatus
                apiStatus={loginStatus}
                successMessage={`Welcome back ${userDetails && userDetails.username} !`}
                successAction={() => navigate('/dashboard')}
                errorMessage={errorWhileLogin}
            />
        </AuthBox>
    );
};

export default Login;
