import { takeEvery, put } from 'redux-saga/effects';
import { userTypes } from 'actions/actionTypes';
import {
    
    userResponse,
    userResponseFail
} from 'actions/user/user';
import { apiCall, defaultHeader } from 'utils/api';
import { API } from 'utils/api-routes'
// import {  defaultHeader } from 'utils/api';
// import { API } from 'utils/api-routes';


function* userRequest(authDetails: any): any {
     const headers = defaultHeader();
    const data = authDetails.payload;
const response = yield apiCall({ headers, data, ...API.users }); 


    if (response.status===200) {
        yield put(userResponse(response));
       
      
}
 else {
        yield put(userResponseFail(response));
    
    
    }
}

    

export function* takeuserRequest(): any {
    yield takeEvery(userTypes.USER_REQUEST, userRequest);
}


