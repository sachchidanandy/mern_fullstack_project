import { Button } from '@mui/material';

export const CustomPrimaryButton = ({ label, additionalStyle, disabled, onClickHandler }) => {
    return (
        <Button
            variant="contained"
            sx={{
                background: '#5865F2',
                color: 'white',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 500,
                width: '100%',
                height: '40px',
            }}
            style={additionalStyle ? additionalStyle : {}}
            disabled={disabled}
            onClick={onClickHandler}
        >
            {label}
        </Button>
    );
};
