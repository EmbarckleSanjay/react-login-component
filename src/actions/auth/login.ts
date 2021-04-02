import { ActionsUnion, createAction } from '../../utils/reduxHelpers';
import * as actionTypes from 'actions/actionTypes';

export const loginRequest = (payload: any) =>
    createAction(actionTypes.LoginTypes.LOGIN_REQUEST, payload);

    export const oauthloginRequest = (payload: any) =>
    createAction(actionTypes.LoginTypes.OAUTH_REQUEST, payload);

    export const loginResponse = (data: any) =>
    // console.log("jwt....",jwt)
    createAction(actionTypes.LoginTypes.LOGIN_RESPONSE, data);
   
    

export const loginResponseFail = (error: any) =>
    createAction(actionTypes.LoginTypes.LOGIN_REQUEST_FAIL, error);

export const signoutRequest = () =>
    createAction(actionTypes.LoginTypes.SIGN_OUT_REQUEST);


export const LOGIN_ACTIONS = {
    loginRequest,
    loginResponse,
    loginResponseFail,
    signoutRequest,
    oauthloginRequest,
 

   
};

export type loginAction = ActionsUnion<typeof LOGIN_ACTIONS>;


