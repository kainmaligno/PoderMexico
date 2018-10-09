import axios from 'axios';
import {CREATE_STORE} from './types'
const baseUrl = `http://localhost:3000/`;

export const createStore = (store) => (dispatch,getState) => {
  const form = new FormData();
  for(let k in store){
    form.append(k, store[k])
  }
  axios.post(`${baseUrl}new_store`,form)
  .then(res => {
    dispatch({type:CREATE_STORE,store:res.data})
  })
  .catch(error => {
    error.message
  })
}