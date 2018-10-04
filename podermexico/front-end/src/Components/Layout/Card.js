import React from "react";
import {Link} from 'react-router-dom'
import { CardTitle, Card, Row, Col, Icon } from 'react-materialize'
import chango from '../../assets/ioelegenate.jpg'
import guerra from '../../assets/guerra.jpeg'
const CardHome = () => {
  return (
    <div className='card-home'>
    <Row>
    <Col lx={3} l={4} m={4} s={12}> 
      <Link to='/dashboard'>
      <Card className='large black-text'
  header={<CardTitle image={chango}>Tiendas</CardTitle>}
  actions={[<a  className='black-text' href='/'>Acerca de las Tiendas</a>]}>
  Descubre las tiendas que Pertenecen a Este Centro.
      </Card>
      </Link>    
   </Col>
   <Col lx={3} l={4} m={4} s={12}> 
     <Link to='/signup'>
      <Card className='large black-text'
  header={<CardTitle image={chango}>Registro de Usuarios</CardTitle>}
  actions={[<a className='black-text' href='/signup'>Ya eres miembro Dale aqui</a>]}>
  Registrate o Entra para tener mas acciones dentro de las Tiendas <Icon>lock</Icon>
      </Card>  
      </Link>
   </Col>
   <Col lx={3} l={4} m={4} s={12}> 
      <Link to='/newfood'>
      <Card className='large black-text'
  header={<CardTitle image={guerra}>Guerra de Puestos</CardTitle>}
  actions={[<a  className='black-text' href='#'>Agrega un Puesto</a>]}>
 Inmortaliza ese Puesto que Tanta dicha te ha dado
      </Card>
      </Link>    
   </Col>

    </Row>
   
    </div>
  );
};

export default CardHome;
{/* <Card className='deep-purple darken-2' textClassName='white-text' title='Tiendas' 
          actions={[<a href='/stores'>Registro</a>]}>
        Registra tu Comercio <Icon>add_circle</Icon>
        </Card> */}