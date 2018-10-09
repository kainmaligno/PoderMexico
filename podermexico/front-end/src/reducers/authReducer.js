import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types'
  
export default (state = {}, action) => {
  switch(action.type){

    case LOGIN_USER:
    console.log('logueaste con exito',action.user.username)
    return action.user

    case SIGNUP_USER:
    console.log('agregue un user nuevo',action.user.username)
    return action.user

    case LOGOUT_USER:
    return action.payload
    
    default:
    return state
  }
}