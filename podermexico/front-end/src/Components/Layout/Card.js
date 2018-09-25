import React from "react";
import {Link} from 'react-router-dom'
import { Card, Row, Col, Icon } from 'react-materialize'
const CardHome = () => {
  return (
    <div className='card-home'>
    <Row>
    <Col lx={3} l={3} m={4} s={2}> 
      <Link to='/signup_stores'>
        <Card className='deep-purple darken-2' textClassName='white-text' title='Tiendas' 
          actions={[<a href='/stores'>Registro</a>]}>
        Registra tu Comercio <Icon>add_circle</Icon>
        </Card>
      </Link>    
   </Col>

    <Link to='/signup'>
    <Col lx={3} l={3} m={4} s={2}>
      <Card className='deep-purple darken-2' textClassName='white-text' title='Clientes' 
        actions={[<a href='/'>Dale Click y Registra</a>]}>
        Registrate <Icon>assignment_ind</Icon>
    </Card>
      </Col>
    </Link>
      
    <Link to='/newfood'>
    <Col lx={3} l={3} m={4} s={2}>
      <Card className='deep-purple darken-2' textClassName='white-text' title='Iron Puestos' 
       actions={[<a href='/'>Recomienda o Registra</a>]}>
       La Guerra <Icon>center_focus_strong</Icon>
    </Card>
      </Col>
    </Link>

    <Link to='/'>
    <Col lx={3} l={3} m={4} s={2}>
      <Card className='deep-purple darken-2' textClassName='white-text' title='Todas las Tiendas' 
      actions={[<a href='/'>Todas las Tiendas</a>]}>
      Listado de Tiendas<Icon>check_circle</Icon>
    </Card>
      </Col>
    </Link>
    </Row>
   
    </div>
  );
};

export default CardHome;
