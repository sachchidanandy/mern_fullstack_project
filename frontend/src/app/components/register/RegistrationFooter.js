import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import { CustomPrimaryButton, RedirectInfo } from '../shared';

const RegistrationFooter = ({ validationError, handleRegFormSubmit }) => {
    const navigate = useNavigate();

    const pushToLoginPage = () => {
        navigate('/login');
    };

    const toolTipText = useCallback(
        () =>
            validationError && validationError.length
                ? `- ${validationError.join(' \n - ')}`
                : 'Click To Submit',
        [validationError],
    );

    return (
        <>
            <Tooltip arrow title={toolTipText()}>
                <div>
                    <CustomPrimaryButton
                        disabled={validationError && validationError.length ? true : false}
                        label="Sign Up"
                        onClickHandler={handleRegFormSubmit}
                        additionalStyle={{ marginTop: 30 }}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Already have an account? "
                redirectText="Login"
                additionalStyle={{ marginTop: 5 }}
                redirectHandler={pushToLoginPage}
            />
        </>
    );
};

export default RegistrationFooter;
