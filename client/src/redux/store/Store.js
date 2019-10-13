import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { persistStore } from 'redux-persist';

import { createStore, applyMiddleware } from 'redux';


import RootReducer from '../reducers/RootReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
};

export const Store = createStore(RootReducer, applyMiddleware(...middlewares));

export const Persistor = persistStore(Store);
