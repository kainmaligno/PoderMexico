import axios from 'axios';
import swal from 'sweetalert2'
const baseurl = `http://localhost:3000/auth/`

export const newUser = (username,password, role)=> {
  return axios
  .post(`${baseurl}signup`,{username, password, role})
  .then(res => {
      
    swal({
      type: 'success',
      title: 'Usuario registrado',
      text: res.data.username
    })
    return res
  })
  .catch(error => {
    console.log(error)
  })
}


export const loginUser = (username,password) => {
  return axios
  .post(`${baseurl}login`,{username,password})
  .then(res => {
   console.log(localStorage)
    swal({
      type: 'success',
      title: 'Bien venido ',
      text: res.data.username
    })
    return res
  })
  .catch(error => {
    console.log(error)
  })
}

export const logoutUser = () => {
  return axios  
  .get(`${baseurl}logout`)
  .then(localStorage.removeItem('data'))
  .then(document.location.reload())
  .then(res => {
      
    swal({
      type: 'success',
      title: 'Hasta luego',
      text: res.data.username
    })
    return res
  })
  .catch(error => {
    console.log(error)
  })
}