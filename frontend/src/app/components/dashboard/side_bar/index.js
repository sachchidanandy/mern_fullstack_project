import { styled } from '@mui/material/styles';
import MainPageButton from './MainPageButton';

const MainContainer = styled('div')({
    width: '70px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#202225',
});

const SideBar = props => {
    return (
        <MainContainer>
            <MainPageButton />
        </MainContainer>
    );
};

export default SideBar;
