import { Button, Typography, Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import { Avatar } from '../../../shared/Avatar';

const FriendListItem = ({ id, userName, isOnline }) => {
    return (
        <Button
            style={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: 'black',
                position: 'relative',
            }}>
            <Avatar username={userName} />
            <Typography
                style={{ marginLeft: '7px', fontWeight: 700, color: '#8e9297' }}
                variant="subtitle1"
                align="left">
                {userName}
            </Typography>
            {isOnline && (
                <Box
                    component="div"
                    style={{
                        color: '#3ba55d',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 'auto',
                    }}>
                    <FiberManualRecordIcon />
                </Box>
            )}
        </Button>
    );
};

export default FriendListItem;
