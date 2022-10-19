import { InputWithLabel } from '../shared';

const LoginForm = ({ email, setEmail, password, setPassword }) => {
    return (
        <>
            <InputWithLabel
                value={email}
                placeholder="Enter e-mail address"
                label="E-mail"
                setValue={setEmail}
                type="text"
                name="email"
            />
            <InputWithLabel
                value={password}
                placeholder="Enter password"
                label="Password"
                setValue={setPassword}
                type="password"
                name="password"
            />
        </>
    );
};

export default LoginForm;
