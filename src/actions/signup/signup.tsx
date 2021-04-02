import { ActionsUnion, createAction } from '../../utils/reduxHelpers';
import * as actionTypes from 'actions/actionTypes';

export const signupRequest = (payload: any) =>
    createAction(actionTypes.SignupTypes.SIGNUP_REQUEST, payload);

export const signupResponse = (data: any) =>
    createAction(actionTypes.SignupTypes.SIGNUP_RESPONSE, data);
    

export const signupResponseFail = (error: any) =>
    createAction(actionTypes.SignupTypes.SIGNUP_REQUEST_FAIL, error);



export const SIGNUP_ACTIONS = {
    signupRequest,
    signupResponse,
    signupResponseFail,
    
};

export type signupAction = ActionsUnion<typeof SIGNUP_ACTIONS>;
