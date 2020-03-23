import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import devtools from '../middlewares/devtools';

const defaultState = { locale: 'en-US', muted: false };
const persistConfig = { key: 'root', storage };

const persistedReducer = persistReducer(persistConfig, (state, action) => {
  if (action.type === 'LOCALE:CHANGE_LOCALE')
    return { ...state, locale: action.payload };

  if (action.type === 'AUDIO:MUTED')
    return { ...state, muted: action.payload };

  return state;
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  defaultState,
  composeEnhancers(applyMiddleware(devtools))
);

export const persistor = persistStore(store);
