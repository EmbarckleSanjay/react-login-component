import { ActionsUnion, createAction } from '../../utils/reduxHelpers';
import * as actionTypes from 'actions/actionTypes';


    export const userRequest = (payload: any) =>
    createAction(actionTypes.userTypes.USER_REQUEST, payload);

    export const userResponse = (data: any) =>
    // console.log("jwt....",jwt)
    createAction(actionTypes.userTypes.USER_RESPONSE, data);
  
export const userResponseFail = (error: any) =>
    createAction(actionTypes.userTypes.USER_REQUEST_FAIL, error);


export const USER_ACTIONS = {
   
    userRequest,
    userResponse,
    userResponseFail,

   
};

export type userAction = ActionsUnion<typeof USER_ACTIONS>;


