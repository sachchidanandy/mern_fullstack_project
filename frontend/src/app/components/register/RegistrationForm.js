import { InputWithLabel } from '../shared';

const RegistrationForm = ({
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUserName,
    rePassword,
    setRePassword,
}) => {
    return (
        <>
            <InputWithLabel
                value={username}
                placeholder="Enter Username"
                label="Username"
                setValue={setUserName}
                type="text"
                name="username"
            />
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
            <InputWithLabel
                value={rePassword}
                placeholder="Re-enter password"
                label="Re-Password"
                setValue={setRePassword}
                type="password"
                name="re-password"
            />
        </>
    );
};

export default RegistrationForm;
