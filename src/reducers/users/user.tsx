import { userTypes as types } from 'actions/actionTypes';
import { userAction } from 'actions/user/user';
import { Reducer } from 'redux';
import { IUser } from 'types/user';

const initialState = {
    isAuthenticated: false,
    jwt:   null,
    error: null,
    isFetching: false,
    userdata:null,
};




const userReducer: Reducer<IUser, userAction> = (state = initialState, action: any) => {

    switch (action.type) {
            case types.USER_REQUEST:
            return { ...state, isFetching: true, isAuthenticated: false, jwt: null, error: null };
           
        case types.USER_RESPONSE:
        return { ...state,  isAuthenticated: true,userdata: action.payload, error: null }
    
        case types.USER_REQUEST_FAIL:
           
            return { ...state, isFetching: false, isAuthenticated: false, error: true };
        default:
            return state;
    }
};



export { userReducer };
    

    
