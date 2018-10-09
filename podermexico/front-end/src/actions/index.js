import axios from 'axios';
import {LOGIN_USER, SIGNUP_USER, LOGOUT_USER} from './types'
import swal from 'sweetalert2'
const baseUrl = `http://localhost:3000/auth/`;


export const loginUser = (user) => (dispatch, getState) => {
  // const form = new FormData()
  // for(let k in user){
  //   form.append(k,user[k])
  // }
  axios.post(`${baseUrl}login`,user)
  .then(res => {
    dispatch({type:LOGIN_USER, user:res.data})
    swal({
      type: 'success',
      title: 'Bienvenido',
      text: res.data.username
    })
    
  })
   .catch(error => {
    swal({
      type:'error',
      title:'algo salio mal',
      text:error.message
    })
   })
}


export const signupUser = (user) => dispatch => {
  const form = new FormData()
  for(let k in user){
    form.append(k,user[k])
  }
  axios.post(`${baseUrl}signup`,form)
  .then(res => {
    dispatch({type:SIGNUP_USER, user: res.data})
    swal({
      type: 'success',
      title: 'Usuario registrado con exito',
      text: res.data.username
    })
  })
  .catch(e => {
    swal({
      type: 'error',
      title: 'Hubo un error con el usuario',
      text: e.message
    })
  })
}

export const logoutUser = () => async dispatch => {
  await axios.get(`${baseUrl}logout`)
  swal({type:'succes', title:'Hasta la Proxima'})
  dispatch({type: LOGOUT_USER, payload:{}})
}