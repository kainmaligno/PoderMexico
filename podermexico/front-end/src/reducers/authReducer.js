import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types'
  const initialState ={
    user:{}
  }
export default (state = initialState, action) => {
  switch(action.type){

    case LOGIN_USER:
    return {
      ...state,
      user: action.user
    }

    case SIGNUP_USER:
    console.log('agregue un user nuevo',action.user.username)
    return{
       ...state,
        user:action.user
    } 

    case LOGOUT_USER:
    console.log('saliste')
    return {
      state,
      user:action.payload 
    }
    
    default:
    return state
  }
}