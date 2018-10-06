import Axios from "axios";
import { swal } from 'sweetalert2';

const baseurl = 'http://localhost:3000/'

export const newStore = (name, description, address,) => {
  return Axios
  .post(`${baseurl}new_store`,{name,description,address})
  .then(res =>{
    swal({
      type:'succes',
      title:'Nueva Tienda registrada',
      text:res.data.name
    })
    return res
  })
  .catch(error => {
    swal({
      type:'error',
      title:'Algo salio mal',
      text:error
    })
  })
}