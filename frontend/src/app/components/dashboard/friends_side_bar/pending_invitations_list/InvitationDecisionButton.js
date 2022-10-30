import { Box, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const InvitationDecisionButton = ({
    disable,
    acceptInvitationHandler,
    rejectInvitationHandler,
}) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton
                style={{ color: 'green' }}
                disabled={disable}
                onClick={acceptInvitationHandler}>
                <CheckIcon />
            </IconButton>
            <IconButton
                style={{ color: 'red' }}
                disabled={disable}
                onClick={rejectInvitationHandler}>
                <ClearIcon />
            </IconButton>
        </Box>
    );
};

export default InvitationDecisionButton;
