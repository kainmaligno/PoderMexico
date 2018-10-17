import axios from 'axios'
import { swal } from 'sweetalert2';

const baseurl = `http://localhost:3000/photo/add`

export const uploadPhoto = (fd) => {
 return axios
 .post(`${baseurl}`,{fd})
 .then (res =>{
    console.log('foto subida con exito',res)
  return res
 })
 .catch(error =>{
   console.log(error)
 })
}