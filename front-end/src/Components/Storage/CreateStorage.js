import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Row, Col, Input } from "react-materialize";
import { createStorage } from '../../actions/storage';
import {connect} from 'react-redux';

class CreateStorage extends Component {
  state = {
    name: "",
    description: "",
    belongStore:localStorage.getItem('storeId')
  };
  
  onChange = event => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.props.createStorage(this.state)
    localStorage.removeItem('storeId')
    this.props.history.push('/dashboard')

  };
  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <Row>
            <h3>Crea tu almacen de ventas</h3>
            <Input
              onChange={this.onChange}
              name="name"
              s={12}
              m={8}
              l={6}
              label="Nombre Almacen"
            />
            <Input
              onChange={this.onChange}
              name="description"
              s={12}
              m={8}
              l={6}
              label="Descripcion"
            />
          </Row>
          <Row>
            <Col>
              <Button type='submit' waves="light" className="purple">
                {" "}
                <Icon right>storage</Icon>
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
 const mapStateToProps = ({storage}) => ({
  storage: storage
 })
export default connect(mapStateToProps,{createStorage})(CreateStorage)
