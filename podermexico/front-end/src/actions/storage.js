import axios from 'axios';
import { CREATE_STORAGE, GET_STORAGE,ITEMS_LOADING } from './types';
import swal from 'sweetalert2';
const baseUrl = `http://localhost:3000/`;

export const createStorage = (storage) => (dispatch) =>{
  dispatch(setItemsLoading())
  axios.post(`${baseUrl}newStorage`,storage,{withCredentials:true})
  .then(res =>{
    dispatch({type:CREATE_STORAGE, storage:res.data})
    swal({
      type: 'success',
      title: 'Nuevo almacen creado',
      text: res.data.name
    })
  })
  .catch(error =>{
    swal({
      type: 'error',
      title: 'No se pudo guardar el almacen',
      text: error
    })
   
  })
}


export const get_storage = () => dispatch => {
  dispatch(setItemsLoading())
  axios.get(`${baseUrl}get_storage`,{withCredentials:true})
  .then(res =>{
    console.log(res.data)
    dispatch({type:GET_STORAGE, get_storage:res.data})
  })
  .catch(error => {
    console.log(error)
  })
}
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};