import React from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import NavBar from '../components/NavBar';

const Login = () => {

    return (
        <div>
            <NavBar/>
            <LoginForm/>
        </div>
    );
};

export default Login;