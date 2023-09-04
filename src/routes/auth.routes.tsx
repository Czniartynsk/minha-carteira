import React from 'react';
import { Routes, Route } from "react-router-dom";

import SignIn from '../pages/SignIn';
import { Redirect } from './redirect.routes';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route 
            path="*" 
            element={<Redirect/>}
        />
    </Routes>
);

export default AuthRoutes;