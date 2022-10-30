import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import SideBar from './side_bar';
import FriendsSideBar from './friends_side_bar';
import Messenger from './messenger';
import AppBar from './app_bar';
import { useEffect } from 'react';
import { logoutUser } from '../../utils';
import { setUserDetails } from '../../reducers/authSlice';

const DashboardWrapper = styled('div')({
    display: 'flex',
    height: '100vh',
    width: '100%',
});

const Dashboard = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const userDetails = localStorage.getItem('user');

        if (userDetails) {
            dispatch(setUserDetails(JSON.parse(userDetails)));
        } else {
            logoutUser();
        }
    }, [dispatch]);

    return (
        <DashboardWrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
        </DashboardWrapper>
    );
};

export default Dashboard;
