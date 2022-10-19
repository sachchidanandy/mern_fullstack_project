import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';

export const AlertNotification = ({
    vertical = 'bottom',
    horizontal = 'center',
    onClose = () => {},
    autoHideDuration = 5000,
    message,
    severity = 'info',
    transition = 'SlideTransition',
}) => {
    const [open, setOpen] = useState(true);

    const handleSnackbarClose = () => {
        setOpen(false);
        onClose();
    };
    return (
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleSnackbarClose}
            autoHideDuration={autoHideDuration}
            TransitionComponent={transition}
        >
            <Alert severity={severity}>{message}</Alert>
        </Snackbar>
    );
};
