import axios from 'axios';
import {LOGIN_USER, SIGNUP_USER, LOGOUT_USER} from './types'
import swal from 'sweetalert2'
const baseUrl = `http://localhost:3000/auth/`;


export const loginUser = (username, password) => {
  return function(dispatch){
    
    axios.post(`${baseUrl}login`, {username, password})
    .then(res => {
      swal({
        type: 'success',
        title: 'Bienvenido',
        text: res.data.username
      })
      return res
    })
    .then(res => dispatch({
      type:LOGIN_USER,
      payload:res
    }))

    .catch(error => {
      swal({
        type:'error',
        title:'algo salio mal',
        
      })
    })
  }
}


export const signupUser = (username, password,role) => {
  return function(dispatch){
    axios.post(`${baseUrl}signup`,{username,password,role})
    .then(res => {
      
      swal({
        type: 'success',
        title: 'Usuario registrado',
        text: res.data.username
      })
      return res
    })
    .then(res => dispatch({
      type:SIGNUP_USER,
      payload: res
    }))
  }
}

export const logoutUser = () => async dispatch => {
  await axios.get(`${baseUrl}logout`)
  swal({type:'succes', titile:'Hasta la Proxima'})
  dispatch({type: LOGOUT_USER, payload:{}})
}