import axios from 'axios'
import { swal } from 'sweetalert2';

const baseurl = `http://localhost:3000/`

export const newFood = (name, description, select) =>{
  return axios
  .post(`${baseurl}newFoodStand`,{name,description,select})
  .then(res =>{
    swal({
      type:'succes',
      title:'Lugar Nuevo Registrado',
      text:res.data.name
    })
    return res
  })
  .catch(error =>{
    swal({
      type:'error',
      title:'Algo salio mal',
      text:error
    })
  })
}
