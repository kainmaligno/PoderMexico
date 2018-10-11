import axios from 'axios';
import {CREATE_STORE, GET_STORES, ITEMS_LOADING} from './types'
import swal from 'sweetalert2';
const baseUrl = `http://localhost:3000/`;

export const createStore = (store) => (dispatch,getState) => {
  const form = new FormData();
  for(let k in store){
    form.append(k, store[k])
  }
  axios.post(`${baseUrl}new_store`,form,{withCredentials:true})
  .then(res => {
    dispatch({type:CREATE_STORE,store:res.data})
    swal({
      type: 'success',
      title: 'Tienda nueva agregada',
      text: res.data.name
    })
  })
  .catch(error => {
    swal({
      type: 'error',
      title: 'Hubo un error con la tienda',
      text: error.message
    })
  })
}



export const get_stores = () => (dispatch) => {
  dispatch(setItemsLoading())
  axios.get(`${baseUrl}get_stores`)
  .then(res => {
    dispatch({type:GET_STORES, get_stores:res.data})
  })

}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};