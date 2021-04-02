import { combineReducers } from 'redux';
import { loginReducer } from './auth/login';
import { signupReducer } from './signup/signup';
import {updateReducer} from './update/update'
import {userReducer} from './users/user'
import { IStore } from 'types/store';

const rootReducer = combineReducers<IStore>({
    login: loginReducer,
    signup:signupReducer,
    update:updateReducer,
    user:userReducer,
});

export { rootReducer };
