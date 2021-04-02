import {Signup} from './sign/index'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React, { useState } from 'react';



export const Auth = (props: any) => {
    const initialAuthState: IAuthInitialState = {
      
        isSignup: true,
        isRegister: false,
        
       
    };

    const [authState, setAuthState] = useState<IAuthInitialState>(initialAuthState);

    const { data } = useSelector((state: any) => state.signup);
    const renderAuth = () => {
        if (authState.isSignup) return <Signup onAuthStateSchange={setAuthState} />;
    };
   
    return (
console.log("in......"),
        <div className="container">
            {(data === null) ? renderAuth() :<Redirect to="/dashboard" /> }
        </div>
    );
};

interface IAuthInitialState {
   
    isRegister: boolean;
    isSignup:boolean,
   
}
