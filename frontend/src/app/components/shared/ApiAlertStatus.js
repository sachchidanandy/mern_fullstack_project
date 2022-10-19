import { AlertNotification, Loader } from './index';

export const ApiAlertStatus = ({ apiStatus, successMessage, successAction, errorMessage }) => {
    if (apiStatus === 'succeeded')
        return (
            <AlertNotification
                severity="success"
                vertical="top"
                message={successMessage}
                onClose={successAction}
                autoHideDuration={800}
            />
        );

    if (apiStatus === 'failed')
        return <AlertNotification severity="error" message={errorMessage} />;

    if (apiStatus === 'loading') return <Loader />;

    return null;
};
