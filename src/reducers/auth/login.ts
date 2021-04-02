import { LoginTypes as types } from 'actions/actionTypes';
import { loginAction, } from 'actions/auth/login';
import { Reducer } from 'redux';
import { ILogin } from 'types/login';

const initialState = {
    isAuthenticated: false,
    jwt: localStorage.getItem('jwt.token')||  null,
    error: null,
    isFetching: false,
    userdata:null,
};




const loginReducer: Reducer<ILogin, loginAction> = (state = initialState, action: any) => {

    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, isFetching: true, isAuthenticated: false, jwt: null, error: null };
            case types.OAUTH_REQUEST:
            return { ...state, isFetching: true, isAuthenticated: false, jwt: null, error: "oauth" };
          
        case types.LOGIN_RESPONSE:
            localStorage.setItem('jwt.token', action.payload.data.jwt.token);
            console.log("token...",action.payload.data.jwt)
        return { ...state,  isAuthenticated: true,jwt: action.payload.data.jwt, error: null }
    
        case types.LOGIN_REQUEST_FAIL:
            return { ...state, isFetching: false, isAuthenticated: false, error: true };
            
        case types.SIGN_OUT_REQUEST:
          localStorage.removeItem('jwt.token')
            return { ...state, isFetching: false, jwt: null, isAuthenticated: false }
            
        default:
            return state;
    }
};



export { loginReducer };
    

    
