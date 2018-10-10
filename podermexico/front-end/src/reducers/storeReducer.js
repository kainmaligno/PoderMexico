import {CREATE_STORE} from '../actions/types'
const initState ={
  stores:{}
}
export default (state = initState, action) =>{
  switch(action.type){
    case CREATE_STORE:
    return {
      ...state,
      stores:action.store
    } 

    default:
    return state
  }
}