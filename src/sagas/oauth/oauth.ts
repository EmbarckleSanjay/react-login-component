import { takeEvery, put } from 'redux-saga/effects';
import { LoginTypes } from 'actions/actionTypes';
import {
    loginResponse,
    loginResponseFail
} from 'actions/auth/login';
import { apiCall, defaultHeader } from 'utils/api';
import { API } from 'utils/api-routes'
// import {  defaultHeader } from 'utils/api';
// import { API } from 'utils/api-routes';


function* oauthloginRequest(authDetails: any): any {
     const headers = defaultHeader();
    const data = authDetails.payload;
const response = yield apiCall({ headers, data, ...API.oauth });    
    if (response.status===201) {
        console.log("oauth response.....",response)
        yield put(loginResponse(response));
       
      
}
 else {
        yield put(loginResponseFail(response));
    
    
    }
}

    

export function* takeoauthloginRequest(): any {
    yield takeEvery(LoginTypes.OAUTH_REQUEST, oauthloginRequest);
}


