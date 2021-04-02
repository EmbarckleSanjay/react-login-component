import { takeEvery, put } from 'redux-saga/effects';
import { updateTypes } from 'actions/actionTypes';

import { apiCall, defaultHeader } from 'utils/api';
import { API } from 'utils/api-routes'
import {updateResponseFail } from 'actions/update/update';
import { signoutRequest } from 'actions/auth/login';

// import {  defaultHeader } from 'utils/api';
// import { API } from 'utils/api-routes';


function* updatepasswordRequest(authDetails: any): any {
     const headers = defaultHeader();
    const data = authDetails.payload;
const response = yield apiCall({ headers, data, ...API.updatepassword });    
if (response.status===200) {
    yield put(signoutRequest());
   
  
}
else {
    yield put(updateResponseFail(response));


}
}

    

export function* takeupdatepasswordRequest(): any {
    yield takeEvery(updateTypes.UPDATE_PASSWORD_REQUEST, updatepasswordRequest);
}


