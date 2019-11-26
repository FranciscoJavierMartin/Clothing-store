import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const middlewares = [logger];

const customCompose: any =
  process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

export const store = createStore(
  rootReducer,
  customCompose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);