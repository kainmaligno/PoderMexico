import React, { Component } from "react";
import {  Link } from 'react-router-dom';
import { Button, Icon, Row, Col, Input } from 'react-materialize'
//import MapWithAMarker from '../Maps/MapComponent';
import MapContainer from "../Maps/MapContainer";
import { connect } from 'react-redux'
import  * as actions from '../../actions/food'

class NewFood extends Component {
  state= {  
    name:'',
    descripcion:'',
    select: '',
    photo: null

  }

  handleChangeP = event =>{
    event.target.files[0]
    this.setState({
      photo: event.target.files[0]
    })
  }
  
  onChange = event => {
    const {target} = event
    const { name, value } = target
    this.setState({
        [name]: value
    })
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createFood(this.state)
    this.props.history.push('/private')
  };


  render() {
    return (
      <div className="container">
        <div className='row'>
        <form onSubmit={this.onSubmit} className="col s12">
        <h4>Registra un Puesto</h4>
        <Input onChange={this.onChange} name='name'  placeholder="Nombre" s={12} m={8}/>
        <Input onChange={this.onChange} name='descripcion' placeholder='Descripcion' s={12} m={8} type='textarea' label='Descripcion'/>
        <Input onChange={this.handleChangeP} name='photo' type="file" label="Foto" s={12}  m={8}/>
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
              <Button  type='submit' waves="light" className="purple">
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
            <Col>
              <Link to="/food_dash">
                <Button waves="light" className="purple">
                  {" "}
                  <Icon right>stores</Icon>
                  Todos los Puestos
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
 const mapSateToProps = ({food}) => ({
  food: food
 })
  
export default connect(mapSateToProps,actions)(NewFood);
