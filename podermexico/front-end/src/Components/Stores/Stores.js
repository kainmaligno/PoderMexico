import React, { Component } from "react";
import swal from "sweetalert2";
import { Link, Redirect } from 'react-router-dom'
import {Button, Icon, } from 'react-materialize'


class Stores extends Component {

   state = {
        name:'',
        description: '',
        address: '',
        file: {},
        location: {}

   }

   inputChange = event => {
     const {target} = event
     const { name, value} = target
     this.setState({
       [name]: value
     })
   }

   submit = event => {
     event.preventDefault()
     console.log(event);
   }
  render() {
    return (
      <div className="container">
      <h1>Registra una Tienda</h1>
        <form onSubmit={this.submit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.inputChange}
                name="name"
                id="name"
                type="text"
                className="validate"
              />
              <label htmlFor="name">Nombre de la Tienda</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
              onChange={this.inputChange}
              id='description'
              name='description'
              type='text'
              className='validate'
              ></input>
              <label htmlFor='description'>Descripcion</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
              onChange={this.inputChange}
              id='address'
              name='address'
              type='text'
              className='validate'
              ></input>
              <label htmlFor='address'>Direccion</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
            <label htmlFor='file'>Toma Imagen</label>
              <input
              onChange={this.inputChange}
              id='file'
              name='file'
              type='file'
              className='validate'
              ></input>
              
            </div>
            <div className='row'>
            <div className='input-field col s12'>
              <input
              onChange={this.inputChange}
              id='location'
              name='location'
              type='text'
              className='validate'
              ></input>
              <label htmlFor='location'>Geolocalizacion</label>
            </div>
          </div>
          </div>
          
          <div className="row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              value="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>{" "}
            <span>
              {" "}
              or{" "}
              <Link to="/login">
                <Button waves="light">
                  <Icon right>account_circle</Icon>
                  Login
                </Button>
              </Link>
            </span>
            <Link to="/home">
              <Button waves="light">
                <Icon right>home</Icon>
                Home
              </Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Stores;
