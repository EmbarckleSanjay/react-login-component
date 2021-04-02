export interface IUser {
    isAuthenticated: boolean;
    error: string | null | boolean;
    isFetching: boolean;
    jwt: string | null | boolean;
    userdata:string | null | boolean;
}
