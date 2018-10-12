import axios from 'axios';
import {CREATE_FOOD, GET_FOOD, ITEMS_LOADING} from './types';
import swal from 'sweetalert2';
const baseUrl = `http://localhost:3000/`;

//CREAR
export const createFood = (food) => dispatch => {
  const form = new FormData()
  for (let k in food){
    form.append(k, food[k])
  }
  axios.post(`${baseUrl}newFoodStand`,form,{withCredentials:true})
  .then(res =>{
    dispatch({type:CREATE_FOOD, foods:res.data})
    swal({
          type: 'success',
          title: 'Nuevo puesto agregado',
          text: res.data.name
        })
  })

  .catch(error => {
    swal({
      type: 'error',
      title: 'Oops! hay un error al agregar puesto',
      text: error.message
    })
  })
}
//TRAER
export const get_foods = (foods) => dispatch => {
  dispatch(setItemsLoading())
  axios.get(`${baseUrl}get_foods`)
  .then( res => {
    dispatch({type:GET_FOOD, get_foods:res.data})
  })
}
//mientras carga
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};