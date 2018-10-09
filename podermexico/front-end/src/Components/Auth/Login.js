import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Icon, Row, Col } from 'react-materialize'
//import {loginUser} from '../../lib/authService'
import {connect} from 'react-redux';
import  * as actions from '../../actions'

class Login extends Component{
  state = {
    user:'',
    username: '',
    password: ''
  }
  
  componentWillReceiveProps(data){
    console.log(data)
    if(data.auth){
      const {user} = data.auth
      this.setState({ user })
    }
    console.log(this.state.user)
    localStorage.setItem('user',JSON.stringify(data.auth))
  }

  inputChange = event => {
    const { target } = event
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  submit = event => {
    event.preventDefault()
    this.props.loginUser(this.state)  
  } 

  onRedirect = () => {
    return (this.state.user === '')?
    (<div className = 'row'>
    <form onSubmit={this.submit} className ='container'>
      <div className = 'row'>
          <div className="input-field col s12">
            <input  onChange={this.inputChange} name='username' id='username' type='text' className="validate"/>
            <label htmlFor="username">User name</label>
          </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
            <input  onChange={this.inputChange}  id="password" name='password' type="password" className="validate"/>
            <label htmlFor='password'>Password</label>
        </div>
      </div>

     <Row>
            <Col>
              <Button type='submit' waves="light" className="purple">
                {" "}
                <Icon right>send</Icon>
                Entrar
              </Button>
            </Col>
            <Col>
            <Link to="/signup">
            <Button waves="light" className='purple'>
              <Icon right>person_add</Icon>
              SignUp
            </Button>
          </Link>
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
    </div> ) :
    (<Redirect to="/" />)
  }
render(){
 
  return(<div>
     
     {this.onRedirect()}
  </div>
  
  )
}
}

const mapStateToProps = ({ auth }) => {
  return {
    auth:auth
  }
 }

export default connect(mapStateToProps,actions)(Login)