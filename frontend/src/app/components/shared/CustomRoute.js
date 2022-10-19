import { Navigate } from 'react-router-dom';

export const CustomRoute = ({ component: Component, isProtected, ...restOfProps }) => {
    const isAuthenticated =
        localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token;

    return isProtected ? (
        isAuthenticated ? (
            <Component {...restOfProps} />
        ) : (
            <Navigate to="/login" />
        )
    ) : isAuthenticated ? (
        <Navigate to="/dashboard" />
    ) : (
        <Component {...restOfProps} />
    );
};
