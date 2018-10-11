import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from 'react-materialize'
import  * as actions from '../../actions'
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/index';

const  SignedInLinks = (props) => {
    return (
      <ul className='right'>
        <li><NavLink to='/dashboard'>Nuevo Producto</NavLink></li>
        <li><a onClick={props.logoutUser}>Salir</a></li>
        <li><NavLink to='/private' className='btn btn-floating purple lighten-1'><Icon>account_circle</Icon></NavLink></li>
        
      </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
  return{
      logoutUser: () => dispatch(logoutUser())
  }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)