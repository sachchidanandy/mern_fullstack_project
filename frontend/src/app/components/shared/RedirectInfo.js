import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const RedirectText = styled('span')({
    color: '#00AFF4',
    fontWeight: 500,
    cursor: 'pointer',
});

export const RedirectInfo = ({ text, redirectText, redirectHandler, additionalStyle }) => {
    return (
        <Typography
            sx={{ color: '#72767d' }}
            style={additionalStyle ? additionalStyle : {}}
            variant="subtitle2"
        >
            {text}
            <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
        </Typography>
    );
};
