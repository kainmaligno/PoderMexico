import React, { Component } from "react";
import swal from "sweetalert2";
import { Link, Redirect } from 'react-router-dom'
import {Button, Icon,Input, Row,Col } from 'react-materialize'
import { connect } from 'react-redux'
import { createStore } from '../../actions/store';

class Stores extends Component {
  
   state = {
        user:'',
        name:'',
        description: '',
        address: '',
        photo: null
   }
   componentWillReceiveProps(data){
    if(data){
      const {user} = data
      this.setState({ user })
    }
   }

   handleChangeP = e => {
    console.log('DEBUG e.target.files[0]', e.target.files[0]);
    console.log(e.target.files[0])
    this.setState({
      photo: e.target.files[0]
    })
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
     this.props.createStore(this.state)
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
              onChange={this.handleChangeP}
              id='photo'
              name='photo'
              type='file'
              label='foto'
              ></Input>
              
            </div>
           
          </div>
          <Row>
            <Col>
              <Button  type='submit' waves="light" className="purple">
                {" "}
                <Icon right>store</Icon>
                Crear Tienda
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
const mapDispatchToProps = (dispatch) => {
  return{
    createStore: (store)=> dispatch(createStore(store))
  }
}
export default connect(null, mapDispatchToProps)(Stores);
