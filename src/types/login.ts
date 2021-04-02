export interface ILogin {
    isAuthenticated: boolean;
    error: string | null | boolean;
    isFetching: boolean;
    jwt: string | null | boolean;
   
}
