import axios from 'axios';
import {LOGIN_USER, SIGNUP_USER} from './types'
import swal from 'sweetalert2'
const baseUrl = `http://localhost:3000/auth/`;


export const loginUser = (username, password) => {
  return function(dispatch){
    axios.post(`${baseUrl}/login`, {username, password})
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
        
      })
    })
  }
}


export const signupUser = (username, password) => {
  return function(dispatch){
    axios.post(`${baseUrl}/signup`,{username, password})
    .then(res => {
      swal({
        type: 'success',
        title: 'usuario registrado',
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