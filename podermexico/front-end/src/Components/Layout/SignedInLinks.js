import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from 'react-materialize'
import { logoutUser } from '../../lib/authService';


class SignedInLinks extends Component {

  handleLogout = event => {
    logoutUser()
    localStorage.removeItem('user')
    this.props.history.push("/")
   }

  render(){
    return (
      <ul className='right'>
        <li><NavLink to='/dashboard'>Nuevo Producto</NavLink></li>
        <li><NavLink to='/' onClick={this.handleLogout}>Salir</NavLink></li>
        <li><NavLink to='/private' className='btn btn-floating purple lighten-1'><Icon>account_circle</Icon></NavLink></li>
        
      </ul>
    )
  }
  
}

export default SignedInLinks