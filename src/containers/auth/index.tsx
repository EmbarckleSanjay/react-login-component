import React, { useState } from 'react';
import { Login } from './login';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Auth = (props: any) => {
    const initialAuthState: IAuthInitialState = {
        isLogin: true,
        isRegister: false,
        isForgotPassword: true,
    };

    const [authState, setAuthState] = useState<IAuthInitialState>(initialAuthState);

    
    const { jwt } = useSelector((state: any) => state.login);
    const renderAuth = () => {
        if (authState.isLogin) return <Login onAuthStateSchange={setAuthState} />;
    };
   
    return (
      

        <div className="container">
            {(jwt===null) ? renderAuth() : <Redirect to="/dashboard" />}
        </div>
    );
};

interface IAuthInitialState {
    isLogin: boolean;
    isRegister: boolean;
    isForgotPassword: boolean;
}
