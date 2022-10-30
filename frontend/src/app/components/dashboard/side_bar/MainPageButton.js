import { Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

const MainPageButton = props => {
    return (
        <Button
            style={{
                width: 48,
                height: 48,
                borderRadius: '16px',
                marginTop: 10,
                padding: 0,
                minWidth: 0,
                color: 'white',
                background: '#5865F2',
            }}>
            <GroupsIcon />
        </Button>
    );
};

export default MainPageButton;
