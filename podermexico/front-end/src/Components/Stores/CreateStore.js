import React, { Component } from "react";
import swal from "sweetalert2";
import { Link, Redirect } from 'react-router-dom'
import {Button, Icon,Input, Row,Col } from 'react-materialize'


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
     console.log(this.state);
   }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit} className="col s12">
        <h3>Registra una Tienda</h3>
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
            
              <Input
              onChange={this.inputChange}
              id='file'
              name='file'
              type='file'
              className='validate'
              label='foto'
              ></Input>
              
            </div>
           
          </div>
          <Row>
            <Col>
              <Button waves="light" className="purple">
                {" "}
                <Icon right>store</Icon>
                Crear Almacen
              </Button>
            </Col>
            <Col>
              <Link to="/">
                <Button waves="light" className="purple">
                  {" "}
                  <Icon right>cancel</Icon>
                  Cancelar
                </Button>
              </Link>
            </Col>
          </Row>
         
        </form>
      </div>
    );
  }
}

export default Stores;
