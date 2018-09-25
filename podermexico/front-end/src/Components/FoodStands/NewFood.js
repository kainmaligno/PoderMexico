import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { Button, Icon,Row,Col,Input } from 'react-materialize'

class NewFood extends Component {
  render() {
    return (

      <div className="input-field col s12">
      <form>
      <Row className='container's={12} m={6} l={12}>
      <Col s={6} m={3} l={12}>
      <Input label='Nombre' type='text'/>
      <Input label='Location' />
      </Col>
      <Input label='Descripcion' type='textarea'/>
      <div className="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div> 
    </Row>

      </form>
     
    </div> 
    
   
    )
  }
}
export default NewFood