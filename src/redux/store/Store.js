import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import RootReducer from '../reducers/RootReducer';

const middlewares = [logger];

const Store = createStore(RootReducer, applyMiddleware(...middlewares));

export default Store;
