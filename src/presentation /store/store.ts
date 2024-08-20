import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

import {apiSlice} from "./apiSlice/apiSlice";
import storage from 'redux-persist/lib/storage';
import appReducer from './features/app-slice';

const persistConfig = {
   key: 'auth',
   version: 1,
   storage,
   whitelist: [
      'AppReducer',
   ],
};

const rootReducer = combineReducers({
   AppReducer: appReducer,
   [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(apiSlice.middleware),
   devTools: true,
})

export const persistor = persistStore(store);
