import { ILogin } from './login';
import { ISignup } from './signup';
import { IUpdate } from './update';
import { IUser } from './user';
export interface IStore {
    login: ILogin;
    signup:ISignup;
    update:IUpdate;
    user:IUser;
}
