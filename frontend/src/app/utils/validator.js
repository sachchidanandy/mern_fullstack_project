import { EMAIL_REG } from './constants';

const validatePassword = password => password.length > 7 && password.length < 17;
const validateEmail = email => EMAIL_REG.test(email);
const validateUserName = username => username.length > 2 && username.length < 21;
const validatePasswordAndRePassword = ({ password, rePassword }) => password === rePassword;

export const validateLoginForm = ({ email, password }) => {
    const errorWhileValidation = [];

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (!isValidEmail) {
        errorWhileValidation.push('Invalid email-id');
    }

    if (!isValidPassword) {
        errorWhileValidation.push('Password should be between 8 to 16 characters');
    }

    return errorWhileValidation;
};

export const validateRegistrationForm = ({ username, email, password, rePassword }) => {
    const errorWhileValidation = [];

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    const isValidUserName = validateUserName(username);
    const isPasswordMatchWithRePassword = validatePasswordAndRePassword({ password, rePassword });

    if (!isValidUserName) {
        errorWhileValidation.push('Username should be between 3 to 20 characters');
    }

    if (!isValidEmail) {
        errorWhileValidation.push('Invalid email-id');
    }

    if (!isValidPassword) {
        errorWhileValidation.push('Password should be between 8 to 16 characters');
    }

    if (!isPasswordMatchWithRePassword) {
        errorWhileValidation.push('Password and Re-password mismatch');
    }

    return errorWhileValidation;
};
