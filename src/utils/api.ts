import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { config } from 'config';
import { IDefaultHeaders } from 'types/envConfig';
import { ApiConfig } from 'types/api';

const apiCall = async (apiConfig: ApiConfig): Promise<any> => {
    try {
        const baseUrl = config.apiBaseURL;

        const requestConfig: AxiosRequestConfig = {
            url: `${'http://192.168.29.196:3000'}${apiConfig.apiPath}`,
            method: apiConfig.action,
            data: apiConfig.data,
            headers: apiConfig.headers,
            timeout: 0,
            validateStatus(status: number) {
                return status >= 200 && status <= 500;
            },
        };

        const response: AxiosPromise<any> = await axios(requestConfig)
            .then((res: AxiosResponse<any>) => {
                return res;
            })
            .catch((error: AxiosError<any>) => handleErrors(error));

        return response;

    } catch (ex) {
        console.log('ex', ex);
        return false;
    }
};

const handleErrors = (error: any) => {
    // console.log('handleErrors', error)

    // Error
    
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        //  console.log(error.response.data);
        //  console.log(error.response.status);
        //  console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        //console.log("req....",error.request);
    }
    
    else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
    }

    if (error.status === undefined) {
        error.error = 'Failed to load resource';
    }

    switch (error.status) {
        case 401: // unauthorised
        case 403: // forbidden
        case 400: // bad request
            break;
        default:
            return error;
    }
    return error;
};

export const defaultHeader = () => {
    const jwt = localStorage.getItem('jwt.token') || '';
    const headers: IDefaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'requestStartTime': new Date(),
        
    
        
       
    };
    // console.log(Cookies)
    if (jwt) {
        headers.Authorization = jwt;
    }
    console.log("localstorage....",jwt)
    return headers;
};


export { apiCall };
