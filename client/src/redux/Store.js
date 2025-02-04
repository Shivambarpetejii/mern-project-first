import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  userReducer  from './user/UserSlice';
import {persistCombineReducers, persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReduccer = combineReducers({user:userReducer})

const persistConfig ={
  key: 'root',
  storage,
  version :1,
}

const persistedReducer = persistReducer(persistConfig, rootReduccer)

export const store = configureStore({
  reducer: persistedReducer,

//   this is only check 
 middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false,
    }),

});

export const persistor = persistStore(store)