import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Button, Icon} from "react-materialize";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

class Private extends Component {
  state = {
    user: ""
  }
  
  // componentWillMount(res){
  //   if(res.data){
  //     const {user} = res.data
  //     this.setState({
  //       user:user
  //     })
  //   }
  // }

  render() {
    console.log(this.props.auth.username)
    const {auth} = this.props
    return (
      <div className="container">
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
            <img className="avatar" src={auth.avatar} />
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
        <Link to='/'>
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
    );
  }
}

const mapStateToProps = ({auth})=> ({
    auth: auth.user
});
export default connect(mapStateToProps)(Private);
