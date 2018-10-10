import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Row, Col, Input } from "react-materialize";

class CreateStorage extends Component {
  state = {
    name: "",
    description: ""
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
    console.log(this.state);
  };
  render() {
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
export default CreateStorage;
