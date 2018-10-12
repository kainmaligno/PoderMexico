import {CREATE_STORAGE,GET_STORAGE,ITEMS_LOADING} from '../actions/types'

const initState={
  storage:[],
  loading:true
}

export default (state = initState, action)=>{
  switch(action.type){
    case CREATE_STORAGE:
    return{
      ...state,
      storage:action.storage,
      loading:false
    }
    case GET_STORAGE:
    console.log(action.get_storage)
    return{
      ...state,
      storage:action.get_storage,
      loading:false
    }
    case ITEMS_LOADING:
    return {
      ...state,
      loading: true
    };
    default:
    return state
  }
}