import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from 'actions/auth/login';
import LoginForm from './components/LoginForm';


export const Login = (props: any) => {
    const dispatch = useDispatch();


    return (
        <LoginForm
    
            onAuthChange={props.onAuthStateSchange}
            submitForm={(values: any) => dispatch(loginRequest({
               
                email: values.loginInputEmail,
                password: values.loginInputPassword,
                username:"",
                firstname:"",
                lastname:"",
                status:"",
                type:"",
                oid:"",
                age:"",
                gender:"",
                img:"",
               
                
               
            }))
        
        
        }
        />
    );
    
};
