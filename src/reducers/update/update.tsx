import { updateTypes as types } from 'actions/actionTypes';
import { updateAction } from 'actions/update/update';
import { Reducer } from 'redux';
import { IUpdate } from 'types/update';

const initialState = {
    isAuthenticated: false,
    jwt:  null,
    error: null,
    isFetching: false,
    data:null
};

const updateReducer: Reducer<IUpdate, updateAction> = (state = initialState, action: any) => {

    switch (action.type) {
        
        case types.UPDATE_REQUEST:
            console.log("reduce......")
            return { ...state, isFetching: true, isAuthenticated: false, jwt: null, error: null };
            case types.UPDATE_PASSWORD_REQUEST:
            console.log("reduce......")
            return { ...state, isFetching: true, isAuthenticated: false, jwt: null, error: null };
         case types.UPDATE_RESPONSE:
            return { ...state,  isAuthenticated: true,data: action.payload, error:"haii" }
        case types.UPDATE_REQUEST_FAIL:
            console.log()
            return { ...state, isFetching: false, isAuthenticated: false, error: "nope" };
        default:
            return state;
    }
};

export { updateReducer };
