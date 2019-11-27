import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const persistConfig = {
  key: 'joker-react',
  storage,
  whitelist: ['store'],
};

const middleware = applyMiddleware(thunk, logger);
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export { store, persistor };