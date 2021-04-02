import { settings as devSettings } from './env/development';
import { settings as prodSettings } from './env/production';
import { settings as stagingSettings } from './env/stage';
export interface IEnvironmentStore {
  NODE_ENV?: string;
  [key: string]: string | undefined;
}
let compileTimeEnv: IEnvironmentStore;
try {
  compileTimeEnv = process.env as IEnvironmentStore;
} catch (error) {
  compileTimeEnv = {};
  // tslint:disable-next-line no-console
  console.log(
    '`process.env` is not defined. ' +
    'Compile-time environment will be empty.'
  );
}
let config: any = null;
switch (compileTimeEnv.REACT_APP_BUILD_TYPE) {
  case 'LOCAL_DEV':
    config = devSettings;
    break;
  case 'STAGING':
    config = stagingSettings;
    break;
  default:
    config = prodSettings;
    break;
}
export { config };
