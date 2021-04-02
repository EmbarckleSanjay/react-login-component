import { ActionsUnion, createAction } from '../../utils/reduxHelpers';
import * as actionTypes from 'actions/actionTypes';

    export const updateRequest = (payload: any) =>
    createAction(actionTypes.updateTypes.UPDATE_REQUEST, payload);
    export const updatepasswordRequest = (payload: any) =>
    createAction(actionTypes.updateTypes.UPDATE_PASSWORD_REQUEST, payload);

    export const updateResponse = (data: any) =>
    createAction(actionTypes.updateTypes.UPDATE_RESPONSE, data);
    

export const updateResponseFail = (error: any) =>
    createAction(actionTypes.updateTypes.UPDATE_REQUEST_FAIL, error);


export const UPDATE_ACTIONS = {
 
    updateRequest,
    updateResponse,
    updateResponseFail,
    updatepasswordRequest,
};

export type updateAction = ActionsUnion<typeof UPDATE_ACTIONS>;
