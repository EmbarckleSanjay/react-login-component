import { SignupTypes as types } from 'actions/actionTypes';
import { signupAction } from 'actions/signup/signup';
import { Reducer } from 'redux';
import { ISignup } from 'types/signup';

const initialState = {
    isAuthenticated: false,
    jwt:  null,
    error: null,
    isFetching: false,
    data:null
};

const signupReducer: Reducer<ISignup, signupAction> = (state = initialState, action: any) => {

    switch (action.type) {
        
        case types.SIGNUP_REQUEST:
            console.log("reduce......")
            return { ...state, isFetching: true, isAuthenticated: false, jwt: null, error: null };
         case types.SIGNUP_RESPONSE:
            return { ...state,  isAuthenticated: true,data: action.payload, error:"haii" }
        case types.SIGNUP_REQUEST_FAIL:
            console.log()
            return { ...state, isFetching: false, isAuthenticated: false, error: "nope" };
        default:
            return state;
    }
};

export { signupReducer };
