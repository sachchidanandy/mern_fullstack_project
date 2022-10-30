import { styled } from '@mui/material/styles';

import AddFriendButton from './AddFriendButton';
import FriendsList from './friends_list';
import FriendsTitle from './FriendsTitle';
import PendingInvitationsList from './pending_invitations_list';

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#2F3136',
});

const FriendsSideBar = props => {
    return (
        <MainContainer>
            <AddFriendButton />
            <FriendsTitle title="Private Messages" />
            <FriendsList />
            <FriendsTitle title="Invitations" />
            <PendingInvitationsList />
        </MainContainer>
    );
};

export default FriendsSideBar;
