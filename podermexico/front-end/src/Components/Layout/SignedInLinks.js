import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { Button, Icon } from 'react-materialize'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class SignedInLinks extends Component {

  componentWillReceiveProps({data}){
    (data === undefined)?
      this.setState({ user: '' }) :
      this.setState({ user: data.username })
  }
  handleLogout = () => {
   console.log(this.props)
  this.props.logoutUser()
  }

  render(){
    return (
      <ul className='right'>
        <li><NavLink to='/'>Nuevo Producto</NavLink></li>
        <li><NavLink to='/' onClick={this.handleLogout}>Salir</NavLink></li>
        <li><NavLink to='/private' className='btn btn-floating purple lighten-1' img=''><Icon>account_circle</Icon>SE</NavLink></li>
      </ul>
    )
  }
  
}

export default SignedInLinks