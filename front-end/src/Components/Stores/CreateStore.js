import React, { Component } from "react";
import { Link } from 'react-router-dom'
import {Button, Icon,Input, Row,Col } from 'react-materialize'
import { connect } from 'react-redux'
//import { createStore } from '../../actions/store';
import MapContainer from '../Maps/MapContainer';
import Navbar from '../Layout/Navbar';
import * as actions from '../../actions/store'

class Stores extends Component {
  
   state = {
        name:'',
        description: '',
        address: '',
        photo: null
   }
   

   handleChangeP = e => {
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
     console.log(this.state)
     this.props.createStore(this.state)
     this.props.history.push('/private')
   }

  render() {
  
    return (
      <div>
        <Navbar/>
      <div className="container">
        <form onSubmit={this.submit} className="col s12">
        <h3>Registra una Tienda</h3>
          <div className="row">
          <Col>
              <MapContainer/>
            </Col>
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
      </div>
    );
  }
}

const mapStateToProps = ({stores}) =>({
  store: stores
})
// const mapDispatchToProps = (dispatch) => {
//   return{
//     store: (store)=> dispatch(createStore(store))
//   }
// }
export default connect(mapStateToProps,actions)(Stores);
