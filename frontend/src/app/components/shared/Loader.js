import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const TransparentDialog = styled('dialog')({
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.7)',
    position: 'fixed',
    top: 0,
    border: 'none',
});

export const Loader = ({ open = true, handleClose = () => {} }) => {
    return (
        <TransparentDialog open={open} onClose={handleClose}>
            <CircularProgress size={80} thickness={4} />
        </TransparentDialog>
    );
};
