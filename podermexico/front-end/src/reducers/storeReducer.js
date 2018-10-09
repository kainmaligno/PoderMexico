import {CREATE_STORE} from '../actions/types'
// const initState ={
//   stores:[
//     {id:'1', nombre:'Abarrotes', contenido:'nada de nada'}
//   ]
// }
export default (state = {}, action) =>{
  switch(action.type){
    case CREATE_STORE:
    return action.createStore

    default:
    return state
  }
}