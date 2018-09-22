import React from 'react';
import { NavLink } from "react-router-dom";
import { Button, Icon } from 'react-materialize'

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li><NavLink to='/'>Nuevo Producto</NavLink></li>
      <li><NavLink to='/'>Salir</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating purple lighten-1' img=''><Icon>account_circle</Icon>SE</NavLink></li>
    </ul>
  )
}

export default SignedInLinks