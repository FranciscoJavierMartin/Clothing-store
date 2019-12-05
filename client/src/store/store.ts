import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares: any[] = [sagaMiddleware];
let customCompose: any = compose;

if (process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
  customCompose = composeWithDevTools;
}

export const store = createStore(
  rootReducer,
  customCompose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);