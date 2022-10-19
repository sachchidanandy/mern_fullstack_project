import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { CustomRoute } from './components/shared';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<CustomRoute component={Login} />} />
                <Route exact path="/register" element={<CustomRoute component={Register} />} />
                <Route
                    exact
                    path="/dashboard"
                    element={<CustomRoute component={Dashboard} isProtected />}
                />
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
        </Router>
    );
}

export default App;
