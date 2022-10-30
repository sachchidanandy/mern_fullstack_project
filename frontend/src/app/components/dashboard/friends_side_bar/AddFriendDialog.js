import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Tooltip,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { validateEmail } from '../../../utils';
import { CustomPrimaryButton, InputWithLabel } from '../../shared';

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendInvitation = () => {} }) => {
    const [email, setEmail] = useState('');
    const [validationError, setValidationError] = useState('Please enter a valid email id.');

    const handleSendInvitation = () => {};

    const handleDialogClose = () => {
        setEmail('');
        closeDialogHandler();
    };

    useEffect(() => {
        setValidationError(!validateEmail(email) && 'Please enter a valid email id.');
    }, [email, setValidationError]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Enter e-mail address of friend which you would like to Invite
                        </Typography>
                    </DialogContentText>
                    <InputWithLabel
                        value={email}
                        placeholder="Enter email address"
                        label="Email"
                        setValue={setEmail}
                        type="text"
                        name="email"
                    />
                </DialogContent>
                <DialogActions>
                    <Tooltip arrow title={validationError || ''}>
                        <div style={{ width: '100%' }}>
                            <CustomPrimaryButton
                                onClickHandler={handleSendInvitation}
                                disabled={validationError ? true : false}
                                label="Send"
                                additionalStyle={{
                                    marginBottom: '10px',
                                }}
                            />
                        </div>
                    </Tooltip>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddFriendDialog;
