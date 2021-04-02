
export interface IENVConfig {
    apiBaseURL: string;
    apiVersionPath: string;
    siteUrl: string;
    mode?: string;

}

export interface IDefaultHeaders {
    Accept: string;
    'Content-Type': string;
    Authorization?: string;
    requestStartTime: Date;
  
}
