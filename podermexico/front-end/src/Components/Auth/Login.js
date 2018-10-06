import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Icon, Row, Col } from 'react-materialize'
import {loginUser} from '../../lib/authService'
// import {connect} from 'react-redux';
// import  * as actions from '../../actions'

class Login extends Component{
  state = {
    user: '',
    username: '',
    password: ''
  }
  // componentWillReceiveProps({data}){
  //   if(data){
  //     const {user} = data
  //     this.setState({ user })
  //   }
  // }
  inputChange = event => {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }
  submit = event => {
    const {username, password} = this.state
    event.preventDefault()
    loginUser(username,password)
    .then(response =>{
      console.log(response)
      var user    = response.data.username;
      var role    = response.data.role;
      var imgUser = response.data.avatarUrl;
      localStorage.setItem('user',user);
      localStorage.setItem('role',role);
      localStorage.setItem('imgUser',imgUser);
      //localStorage.setItem('info', JSON.parse({info:response.data}))
      this.props.history.push('/private')
      return response
    })
    .catch(error=>{
      console.log(error)
    })
   
   
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
              <Button waves="light" className="purple">
                {" "}
                <Icon right>send</Icon>
                Entrar
              </Button>
            </Col>
            <Col>
            <Link to="/signin">
            <Button waves="light" className='purple'>
              <Icon right>account_circle</Icon>
              Login
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

// const mapStateToProps = ({auth}) => {
//   return auth
// }connect(mapStateToProps,actions)
//this.props.loginUser(username,password)

export default Login;