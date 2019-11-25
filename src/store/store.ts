import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const middlewares = [logger];

const customCompose:any =process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  customCompose(applyMiddleware(...middlewares))
);
