import { createStore, applyMiddleware, Middleware, Store, AnyAction } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootReducer } from 'reducers';
import { rootSaga } from 'sagas';
import { IStore } from 'types/store';
import { Dispatch } from 'react';

const logger: Middleware = createLogger();
const sagaMiddleWare: SagaMiddleware<{}> = createSagaMiddleware();
const middleWare: any[] = [sagaMiddleWare];

middleWare.push(logger);

const store: Store<IStore, AnyAction> & {
    dispatch: Dispatch<any>;
} = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleWare.run(rootSaga);

export { store };
