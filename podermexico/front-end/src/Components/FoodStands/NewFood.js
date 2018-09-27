import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import { Button, Icon, Row, Col, Input } from 'react-materialize'
//import MapWithAMarker from '../Maps/MapComponent';
import MapContainer from "../Maps/MapContainer";

  
class NewFood extends Component {
  state= {

  }
  
  onChange = event => {
    console.log(event);
  };

  onSubmit = event => {
    console.log(event);
  };


  render() {
    return (
      <div className="container">
        <div className='row'>
        <form onSubmit={this.submit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.handleChange}
                name="name"
                className="validate"
                type="text"
                id="name"
              />
              <label htmlFor="name">Nombre</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.handleChange}
                name="descritpcion"
                className="materialize-textarea"
                type="text"
                id="description"
              />
              <label htmlFor="description">Descripcion</label>
            </div>
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <div className="input-field col s12">
            <select  htmlFor='category'>
                <option value='Tacos'>Tacos</option>
                <option value='Tortas'>Tortas</option>
                <option value='Hamburguesas'>Hamburguesas</option>
                <option value='Hotdogs'>Hotdogs</option>
                <option value='Pizzas'>Pizzas</option>
                <option value='Quesadillas'>Quesadillas</option>
                <option value='Pambazos'>Pambazos</option>
                <option value='Chilakillers'>Chilakillers</option>
                <option value='Otro'>Otro</option>
            </select>
            <label id='category' name='category' >Escoge tu Tipo de puesto</label>
           
          </div>
          <div className='row'>
          <MapContainer/>
          </div>
         
        


           {/* botonera */}
          <div className="row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              value="submit"
              name="action"
            >
              Enviar
              <i className="material-icons right">send</i>
            </button>{" "}
            <span>
              {" "}
              o"{" "}
              <Link to="/home">
              <Button waves="light">
                <Icon right>home</Icon>
                Cancelar
              </Button>
            </Link>
            </span>
           
          </div>
        </form>
        </div>
      </div>
    );
  }
}
export default NewFood;
