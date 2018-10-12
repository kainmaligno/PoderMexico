import { CREATE_STORE, GET_STORES, ITEMS_LOADING } from '../actions/types'
const initState ={
  stores:[],
  loading: false
}
export default (state = initState, action) =>{
  switch(action.type){
    case CREATE_STORE:
    return {
      ...state,
      stores: action.store,
      loading:false
    };

    case GET_STORES:
    return{
      ...state,
      stores: action.get_stores,
      loading:false
    };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
    return state
  }
}