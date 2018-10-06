import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import { Button, Icon, Row, Col, Input } from 'react-materialize'
//import MapWithAMarker from '../Maps/MapComponent';
import MapContainer from "../Maps/MapContainer";
import { newFood } from '../../lib/newFoodService';
import Axios from "axios";


class NewFood extends Component {
  state= {  
    name:'',
    descripcion:'',
    //file:{},
    select: ''

  }
  
  //   handleChangeP = e => {
  //   console.log('DEBUG e.target.files[0]', e.target.files[0]);
  //   console.log(e.target.files[0])
  //   this.setState({
  //     file: e.target.files[0]
  //   })
  // }
  onChange = event => {
    const {target} = event
    const { name, value } = target
    this.setState({
        [name]: value
    })
  };

  onSubmit = event => {
    event.preventDefault();
    // let file = new FormData()
    // file.append('photo',this.state.file, this.state.file.name)
    const {name, description, select} = this.state
    newFood(name,description,select)
    .then(response =>{
      console.log(response)
      return response
     
    })
    .catch(error =>{
      console.log(error)
    })
    // Axios.post(`http://localhost:3000/newFoodStand`, file)
    //   .then(thing => console.log(thing))
    //   .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="container">
        <div className='row'>
        <form onSubmit={this.onSubmit} className="col s12">
        <h4>Registra un Puesto</h4>
        <Input onChange={this.onChange} name='name'  placeholder="Nombre" s={12} m={8}/>
        <Input onChange={this.onChange} name='descripcion' placeholder='Descripcion' s={12} m={8} type='textarea' label='Descripcion'/>
        {/* <Input onChange={this.handleChangeP} name='file' type="file" label="Foto" s={12}  m={8}/> */}
        {/* <input type="file"  onChange={(e)=>this.handleChangeP(e)} /> <br/> */}
        <Input onChange={this.onChange} name='select' s={12} m={8}type='select' label='Tipo de Lugar' icon='restaurant_menu' defaultValue='2'>
                <option value='Tacos'>Tacos</option>
                <option value='Tortas'>Tortas</option>
                <option value='Hamburguesas'>Hamburguesas</option>
                <option value='Hotdogs'>Hotdogs</option>
                <option value='Pizzas'>Pizzas</option>
                <option value='Quesadillas'>Quesadillas</option>
                <option value='Pambazos'>Pambazos</option>
                <option value='Chilakillers'>Chilakillers</option>
                <option value='Otro'>Otro</option>
        </Input>
        <div className='map-food right'>
        <MapContainer/>
        </div>
       
           {/* botonera */}
           <Row>
            <Col>
              <Button waves="light" className="purple">
                {" "}
                <Icon right>send</Icon>
                Enviar
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
export default NewFood;
