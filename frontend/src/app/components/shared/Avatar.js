import { styled } from '@mui/material/styles';

const AvatarPreview = styled('div')({
    height: '42px',
    width: '42px',
    backgroundColor: '#5865f2',
    borderRadius: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 700,
    marginLeft: '5px',
    color: 'white',
});
export const Avatar = ({ username = '', large = false }) => {
    return (
        <AvatarPreview style={large ? { width: '80px', height: '80px' } : {}}>
            {username.substring(0, 2)}
        </AvatarPreview>
    );
};
