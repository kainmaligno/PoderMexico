import axios from 'axios';
import { CREATE_STORAGE } from './types';
import swal from 'sweetalert2';
const baseUrl = `http://localhost:3000/`;

export const createStorage = (storage) => (dispatch) =>{
  axios.post(`${baseUrl}newStorage`,storage)
  .then(res =>{
    dispatch({type:CREATE_STORAGE,storage:res.data})
  })
  .catch(error =>{
    error.message
  })
}
