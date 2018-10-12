import axios from 'axios'
import {CREATE_PRODUCT, GET_PRODUCT, ONE_PRODUCT, ITEMS_LOADING}  from './types'
import swal from 'sweetalert2'
const baseUrl = `http://localhost:3000/`;

export const createProduct = (product) => (dispatch, getState) =>{
  const form = new FormData();
  for (i in product){
    form .append(i, product[i])
  }
  axios.post(`${baseUrl}new_product`, form, {withCredentials:true})
  .then( res => {
    dispatch({type:CREATE_PRODUCT, product:res.data})
    swal({
      type: 'success',
      title: 'Nuevo producto en el almacen',
      text: res.data.name
    })
    
  })
  .catch(error => {
    swal({
      type: 'error',
      title: 'Hubo un error en el producto',
      text: error.message
    })
  })
}

export const get_product = () => (dispatch, getState) =>{
  dispatch(setItemsLoading())
  axios.get(`${baseUrl}products`)
  .then(res => {
    dispatch({type:GET_PRODUCT, get_products:res.data})
  })

}


export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};