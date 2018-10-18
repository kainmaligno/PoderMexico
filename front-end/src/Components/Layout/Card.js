import React from "react";
import {Link} from 'react-router-dom'
import { CardTitle, Card, Row, Col} from 'react-materialize'
import blob from '../../assets/blob.png'
import guerra from '../../assets/guerra.jpeg'
const number = [1,2,3]
const CardHome = () => {
  return (
    <div className=''>
    <Row className='cards container'>
    <Col lx={6} l={4} m={3} s={12}> 
     <h3>Visitar Tiendas</h3>
      <Link to='/dashboard'>
      <Card className=' black-text' key={number[0]}
  header={<CardTitle  image={blob}></CardTitle>}
  >
  Descubre las tiendas que Pertenecen a Este Centro.
      </Card>
      </Link>    
   </Col>
   {/* <Col lx={3} l={4} m={4} s={12}> 
     <Link to='/signup'>
      <Card className=' black-text' key={number[1]}
  header={<CardTitle image={blob}>Registro de Usuarios</CardTitle>}
  >
  Registrate o Entra para tener mas acciones dentro de las Tiendas
      </Card>  
      </Link>
   </Col> */}
   <Col lx={6} l={4} m={3} s={12}>
   <h3>Visitar Puestos</h3> 
      <Link to='/newfood'>
      <Card className=' black-text' key={number[2]}
  header={<CardTitle image={guerra}></CardTitle>}
  >
 Inmortaliza ese Puesto que Tanta dicha te ha dado
      </Card>
      </Link>    
   </Col>

    </Row>
   
    </div>
  );
};

export default CardHome;