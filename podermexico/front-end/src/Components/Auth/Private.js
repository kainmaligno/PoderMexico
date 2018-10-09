import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Button, Icon} from "react-materialize";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

class Private extends Component {
  state = {
    user: ""
  };
  // componentWillReceiveProps(props){
  //   console.log(props.data)
  //   if(!props.data){
  //     this.setState({user: ''})
  //   }

  // }
  // componentWillMount(){
  //   if(this.props.data){
  //     this.setState({
  //       user: this.props.data.username
  //     })
  //   }
  // }

  render() {
    let user = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="container">
        <Row l={12} m={8} s={12}>
          <Col l={8}>
            <h1>Hola {user.username}</h1>
            <div className="section white">
              <div className="row container">
                <h2 className="header">Administrar Tienda</h2>
                <p className="grey-text text-darken-3 lighten-3">En este dash puedes administrar tu tienda.</p>
              </div>
            </div>
          </Col>

          <Col l={4}>
            <img className="avatar" src={user.avatar} />
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

const mapStateToProps = auth => {
  return {
    auth
  };
};
export default connect(mapStateToProps)(Private);
