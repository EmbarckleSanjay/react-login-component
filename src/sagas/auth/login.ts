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


function* sendLoginRequest(authDetails: any): any {
     const headers = defaultHeader();
    const data = authDetails.payload;
 const response = yield apiCall({ headers, data, ...API.login });
 // eslint-disable-next-line react-hooks/rules-of-hooks


    // eslint-disable-next-line react-hooks/rules-of-hooks
    // console.log("came",authDetails.payload)
    
    // const response = {
    // //     // jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmluLmJAYXhpbXNvZnQuY29tIiwidXNlcklkIjoiNWQ4ZGIxYzliNjQwMmEzNWMwNGY4NWYzIiwiaWF0IjoxNTcwMTEwNjc3LCJleHAiOjE1NzAxMTQyNzd9.VqM-UHDiYT_DZhvoRAhCJ89R7VtalSFN1DQxWdWQxNg',
    // //     message: 'Auth successful',
    //     status:loginResponse ? 200  : 400,
       
    //  };

    
    if (response.status===200) {
        // console.log("res.....",response)
        // let setCookie = response.headers.get('set-cookie');
        //  console.log('setCookie......', Set-Cookie);

        yield put(loginResponse(response));
        
        // console.log("cookie...")
       
      
}
 else {
        yield put(loginResponseFail(response));
    
    
    }
}

    

export function* takeLoginRequest(): any {
    yield takeEvery(LoginTypes.LOGIN_REQUEST, sendLoginRequest);
}





