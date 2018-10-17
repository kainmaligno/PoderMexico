import {CREATE_PRODUCT, GET_PRODUCT, ONE_PRODUCT,ITEMS_LOADING} from '../actions/types'
const initState ={
  products:[],
  loading: false
}

export default (state = initState,action) => {
  switch(action.type){

    case CREATE_PRODUCT:
    return{
      ...state,
      products: action.product,
      loading: false
    }
    case GET_PRODUCT:
    return{
      ...state,
      products: action.get_products,
      loading:false 
    }

    case ONE_PRODUCT:
    return{
      ...state,
      products: action.get_one,
      loading: false
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