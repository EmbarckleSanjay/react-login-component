import { takeEvery, put } from 'redux-saga/effects';
import { SignupTypes } from 'actions/actionTypes';
import {
    signupResponse,
    signupResponseFail
} from 'actions/signup/signup';
import { apiCall, defaultHeader } from 'utils/api';
import { API } from 'utils/api-routes'
// import {  defaultHeader } from 'utils/api';
// import { API } from 'utils/api-routes';


function* sendsignuprequest(authDetails: any): any {
     const headers = defaultHeader();
    const data = authDetails.payload;
 const response = yield apiCall({ headers, data, ...API.signup });


    // eslint-disable-next-line react-hooks/rules-of-hooks
    // console.log("came",authDetails.payload)
    
    // const response = {
    // //     // jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmluLmJAYXhpbXNvZnQuY29tIiwidXNlcklkIjoiNWQ4ZGIxYzliNjQwMmEzNWMwNGY4NWYzIiwiaWF0IjoxNTcwMTEwNjc3LCJleHAiOjE1NzAxMTQyNzd9.VqM-UHDiYT_DZhvoRAhCJ89R7VtalSFN1DQxWdWQxNg',
    // //     message: 'Auth successful',
    //     status:loginResponse ? 200  : 400,
       
    //  };
    if (response.status===201) {
        console.log("res.....",response)
        yield put(signupResponse(response));
}
 else {
        yield put(signupResponseFail(response));
    
    
    }
}

export function* takesignuprequest(): any {
    yield takeEvery(SignupTypes.SIGNUP_REQUEST, sendsignuprequest);
}
