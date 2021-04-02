import { Method } from 'axios';
import { IDefaultHeaders } from './envConfig';

export type ApiConfig = {
    apiPath: string,
    headers: IDefaultHeaders,
    data: any,
    action: Method
};
