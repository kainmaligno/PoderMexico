import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import storageReducer from './storageReducer';

export default combineReducers({
  auth: authReducer,
  store: storeReducer,
  storage: storageReducer
})

