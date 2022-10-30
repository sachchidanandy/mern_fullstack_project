import { styled } from '@mui/material/styles';
import DropDownMenu from './DropDownMenu';

const MainContainer = styled('div')({
    position: 'absolute',
    top: 0,
    right: 0,
    height: '50px',
    borderBottom: '1px solid black',
    background: '#36393f',
    width: 'calc(100% - 324px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 15px',
});

const AppBar = props => {
    return (
        <MainContainer>
            <DropDownMenu />
        </MainContainer>
    );
};

export default AppBar;
