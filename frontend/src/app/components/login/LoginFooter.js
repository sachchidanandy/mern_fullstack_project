import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import { CustomPrimaryButton, RedirectInfo } from '../shared';

const LoginFooter = ({ validationError, handleLoginFormSubmit }) => {
    const navigate = useNavigate();

    const pushToRegisterPage = () => {
        navigate('/register');
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
                        label="Log In"
                        onClickHandler={handleLoginFormSubmit}
                        additionalStyle={{ marginTop: 30 }}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyle={{ marginTop: 5 }}
                redirectHandler={pushToRegisterPage}
            />
        </>
    );
};

export default LoginFooter;
