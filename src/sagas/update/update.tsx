import { takeEvery, put } from 'redux-saga/effects';
import { updateTypes } from 'actions/actionTypes';

import { apiCall, defaultHeader } from 'utils/api';
import { API } from 'utils/api-routes'
import { userResponse, userResponseFail } from 'actions/user/user';
// import {  defaultHeader } from 'utils/api';
// import { API } from 'utils/api-routes';


function* updateRequest(authDetails: any): any {
     const headers = defaultHeader();
    const data = authDetails.payload;
const response = yield apiCall({ headers, data, ...API.updateuser });    
if (response.status===200) {
    yield put(userResponse(response));
   
  
}
else {
    yield put(userResponseFail(response));


}
}

    

export function* takeupdateRequest(): any {
    yield takeEvery(updateTypes.UPDATE_REQUEST, updateRequest);
}


