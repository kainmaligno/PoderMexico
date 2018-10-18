import React, { Component } from "react";
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import { Row, Col, Button, Icon} from "react-materialize";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";


class Private extends Component {
  state = {
    user: ""
  }
  checkRole = () => {
   if(this.props.auth.role==='ADMIN'){
    const {auth} = this.props
      console.log("eres user ADMIN")
      return(
          <div className='container'>
             <Row l={12} m={8} s={12}>
          <Col l={8}>
            <h1>Hola:{auth.username}</h1>
            <div className="section white">
              <div className="row container">
                <h2 className="header">Administrar Tienda</h2>
                <span>Tienes un rol de:{auth.role}</span>
                <p className="grey-text text-darken-3 lighten-3">En este dash puedes administrar tu tienda.</p>
              </div>
            </div>
          </Col>

          <Col l={4}>
            <img className="avatar" src={auth.avatar} alt='avatar' />
          </Col>
        </Row>
        <Row>
        <Col>
        <Link to='/create_store'>
        <Button waves="light" className='purple'>
        <Icon right>apps</Icon>
        Crear Tienda
        </Button>
        </Link>
        </Col>
        <Col>
        <Link to='/dashboard'>
        <Button waves="light" className='purple'>
        <Icon right>store</Icon>
        Ver mi tienda
        </Button>
        </Link>
        </Col>
        <Col>
        <Link to='/'>
        <Button waves="light" className='purple'>
        <Icon right>home</Icon>
         Home
        </Button>
        </Link>
        </Col>
        
        </Row>
          </div>
      )
   }if(this.props.auth.role === 'COSTUMER'){
    const {auth} = this.props
     console.log('eres CLIENTE')
      return(
        <div className='container'>
           <Row l={12} m={8} s={12}>
          <Col l={8}>
            <h1>Hola:{auth.username}</h1>
            <div className="section white">
              <div className="row container">
                <h2 className="header">Organiza tu compras </h2>
                <span>Tienes un rol de:{auth.role}</span>
                <p className="grey-text text-darken-3 lighten-3">
                En este dash puedes ver tu bella foto de perfil,
                ver tus compras y apostar por un local comercial
                </p>
              </div>
            </div>
          </Col>

          <Col l={4}>
            <img className="avatar" src={auth.avatar} alt='avatar'/>
          </Col>
        </Row>
        <Row>
        <Col>
        <Link to='/newfood'>
        <Button waves="light" className='purple'>
        <Icon right>apps</Icon>
        Recomendar un Puesto
        </Button>
        </Link>
        </Col>
        <Col>
        <Link to='/dashboard'>
        <Button waves="light" className='purple'>
        <Icon right>store</Icon>
        Todas las Tiendas
        </Button>
        </Link>
        </Col>
        <Col>
        <Link to='/food_dash'>
        <Button waves="light" className='purple'>
        <Icon right>restaurant_menu</Icon>
         Todos los puestos
        </Button>
        </Link>
        </Col>
        <Col>
        <Link to='/'>
        <Button waves="light" className='purple'>
        <Icon right>home</Icon>
         Home
        </Button>
        </Link>
        </Col>
        </Row>
        </div>
      )
   }
  }
  render() {
    return (
      <div className=''>
      <Navbar/>
        {this.checkRole()}
      <Footer/>  
      </div>
    );
  }
}

const mapStateToProps = ({auth})=> ({
    auth: auth.user
});
export default connect(mapStateToProps)(Private);
