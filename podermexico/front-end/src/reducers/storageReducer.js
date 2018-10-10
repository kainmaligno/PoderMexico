import {CREATE_STORAGE} from '../actions/types'

const initState={
  storage:{}
}

export default (state = initState, action)=>{
  switch(action.type){
    case CREATE_STORAGE:
    return{
      ...state,
      storage:action.storage
    }
    
    default:
    return state
  }
}