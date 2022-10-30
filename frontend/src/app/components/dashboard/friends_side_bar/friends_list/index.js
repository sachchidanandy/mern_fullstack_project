import { styled } from '@mui/material/styles';
import FriendListItem from './FriendListItem';

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
});

const DUMMY_FRIENDS_LIST = [
    {
        id: 1,
        name: 'John',
        online: true,
    },
    {
        id: 2,
        name: 'Tom',
        online: false,
    },
    {
        id: 3,
        name: 'Jerry',
        online: true,
    },
    {
        id: 4,
        name: 'Boxer',
        online: false,
    },
];

const FriendsList = props => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS_LIST.map(f => (
                <FriendListItem id={f.id} userName={f.name} isOnline={f.online} key={f.id} />
            ))}
        </MainContainer>
    );
};

export default FriendsList;
