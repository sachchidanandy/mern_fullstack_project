import { styled } from '@mui/material/styles';

import PendingInvitationsListItem from './PendingInvitationListItem';

const DUMMY_INVITATION = [
    { _id: 1, senderId: { username: 'Mark1', email: 'dummy1@gemail.com' } },
    { _id: 2, senderId: { username: 'Mark2', email: 'dummy2@gemail.com' } },
    { _id: 3, senderId: { username: 'Mark3', email: 'dummy3@gmail.com' } },
];

const MainContainer = styled('div')({
    height: '22%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    overflow: 'auto',
});

const PendingInvitationsList = props => {
    return (
        <MainContainer>
            {DUMMY_INVITATION.map(invitation => (
                <PendingInvitationsListItem
                    key={invitation._id}
                    id={invitation._id}
                    username={invitation.senderId.username}
                    email={invitation.senderId.email}
                />
            ))}
        </MainContainer>
    );
};

export default PendingInvitationsList;
