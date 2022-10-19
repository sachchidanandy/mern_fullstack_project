import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2',
});

export const AuthBox = props => {
    return (
        <BoxWrapper maxWidth="sm">
            <Box
                sx={{
                    width: 700,
                    background: '#36393f',
                    borderRadius: 5,
                    boxShadow: '0px 2px 10px 0px rgb(0 0 0 / 20%)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '25px',
                    margin: '0px 8px',
                }}
            >
                {props.children}
            </Box>
        </BoxWrapper>
    );
};
