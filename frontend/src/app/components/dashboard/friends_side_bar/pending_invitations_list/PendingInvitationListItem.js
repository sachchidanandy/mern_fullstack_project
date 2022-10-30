import { useState } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

import { Avatar } from '../../../shared/Avatar';
import InvitationDecisionButton from './InvitationDecisionButton';

const PendingInvitationListItem = ({
    id,
    username,
    email,
    acceptInvitation = () => {},
    rejectInvitation = () => {},
}) => {
    const [disableButton, setDisableButton] = useState(false);

    const handleAcceptInvitation = () => {
        acceptInvitation({ id });
        setDisableButton(true);
    };

    const handleRejectInvitation = () => {
        rejectInvitation({ id });
        setDisableButton(true);
    };

    return (
        <Tooltip title={email} arrow>
            <div style={{ width: '100%' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '42px',
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <Avatar username={username} />
                    <Typography
                        sx={{ marginLeft: '7px', fontWeight: 700, color: '#8e9297', flexGrow: 1 }}
                        variant="subtitle1">
                        {username}
                    </Typography>
                    <InvitationDecisionButton
                        disable={disableButton}
                        acceptInvitationHandler={handleAcceptInvitation}
                        rejectInvitationHandler={handleRejectInvitation}
                    />
                </Box>
            </div>
        </Tooltip>
    );
};

export default PendingInvitationListItem;
