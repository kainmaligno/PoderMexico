import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from 'react-materialize'
import  * as actions from '../../actions'
import { connect } from 'react-redux';

class SignedInLinks extends Component {

  handleLogout = event => {
    this.props.logoutUser()
    this.props.history.push("/login")
   }

  render(){
    return (
      <ul className='right'>
        <li><NavLink to='/dashboard'>Nuevo Producto</NavLink></li>
        <li><NavLink to='' onClick={this.handleLogout}>Salir</NavLink></li>
        <li><NavLink to='/private' className='btn btn-floating purple lighten-1'><Icon>account_circle</Icon></NavLink></li>
        
      </ul>
    )
  }
  
}

export default connect(null,actions)(SignedInLinks)