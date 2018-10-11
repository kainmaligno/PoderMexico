import { CREATE_FOOD, GET_FOOD, DELETE_FOOD, ITEMS_LOADING } from '../actions/types';
const initState = {
  foods: [],
  loading: false
}

export default (state = initState, action) => {
  switch(action.type){
    case CREATE_FOOD:
    return{
      ...state,
      foods: action.food,
      loading: false
    }
    case GET_FOOD:
    return{
      ...state,
      foods:action.get_foods,
      loading:false
    }

    case DELETE_FOOD:
    return{
      ...state,
      foods:action.delete_food
    }
    case ITEMS_LOADING:
    return{
      ...state,
      loading:true
    }
    default:
    return state
  }
}