import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import storageReducer from './storageReducer';
import foodStandReducer from './foodStandReducer'

export default combineReducers({
  auth: authReducer,
  store: storeReducer,
  storage: storageReducer,
  food: foodStandReducer
})

