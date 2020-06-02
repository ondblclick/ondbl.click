import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import devtools from '../middlewares/devtools';

const defaultState = { locale: 'en-US', muted: false, devtools_messages: [], devtools_config_items: { 'devtools-background-color': 'rgba(0,0,0,0.75)' } };
const persistConfig = { key: 'root', storage };

const persistedReducer = persistReducer(persistConfig, (state, action) => {
  if (action.type === 'LOCALE:CHANGE_LOCALE')
    return { ...state, locale: action.payload };

  if (action.type === 'AUDIO:MUTED')
    return { ...state, muted: action.payload };

  if (action.type === 'DEVTOOLS:MESSAGE')
    return { ...state, devtools_messages: [action.payload, ...state.devtools_messages] };

  if (action.type === 'DEVTOOLS:CLEAR_MESSAGES')
    return { ...state, devtools_messages: [] };

  if (action.type === 'DEVTOOLS:SET_CONFIG_ITEM')
    return { ...state, devtools_config_items: { ...state.devtools_config_items, ...action.payload } };

  return state;
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  defaultState,
  composeEnhancers(applyMiddleware(devtools))
);

export const persistor = persistStore(store);
