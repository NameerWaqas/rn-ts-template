/**
 * Install Redux saga incase of using it.
 * Basic setup is commented in following lines
 * import createSagaMiddleware from '@redux-saga/core';
 */
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import authReducer from './reducers/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  //   sagaMiddleware,
];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({auth: authReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// configuring reducers and middleware
export const store = configureStore({reducer: persistedReducer, middleware});

export const persistor = persistStore(store);

// sagaMiddleware.run(watchFunc);
