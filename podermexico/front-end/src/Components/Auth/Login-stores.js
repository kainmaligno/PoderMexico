import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize'
import {connect} from 'react-redux';
import  * as actions from '../../actions'

class Login extends Component{
  state = {
    user: '',
    username: '',
    password: ''
  }

  inputChange = event => {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }
 componentWillReceiveProps({data}){
   if(data){
    this.setState({
      user: data.username
    })
   }
   
 }
  submit = event => {
    const {username, password} = this.state
    event.preventDefault()
    this.props.loginUser(username,password)
    localStorage.setItem('client','costumer')
    console.log(localStorage.getItem('client'))
    this.props.history.push('/private')
  } 

  onRedirect = () => {
    
    return (this.state.user === '')?
    (<div className = 'row'>
    <form onSubmit={this.submit} className ='container'>
      <h1>Bienvenido Administrador</h1>
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
      <div className ='row s6 m12 l12'>
      <button className="btn waves-effect waves-light" type="submit" value='login' name="action">Submit
    <i className="material-icons right">send</i>
  </button>  <span> or <Link to='/signup'><Button waves='light'><Icon right>account_circle</Icon>Signup</Button></Link></span> 
  <Link to="/home"><Button waves='light'><Icon right>home</Icon>Home</Button></Link>
      </div>
     
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

const mapStateToProps = ({auth}) => {
  return auth
}

export default connect(mapStateToProps,actions)(Login);