import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';

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
  
  }

  onRedirect = () => {
    
    return (this.state.user === '')?
    (<div className = 'row'>
    <form onSubmit={this.submit} className ='col s12'>
      <div className = 'row'>
          <div className="input-field col s12">
            <input  onChange={this.inputChange} placeholder='username' name='username' id='username' type='text' className="validate"/>
           
          </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
            <input  onChange={this.inputChange} placeholder='password' id="password" name='password' type="password" className="validate"/>
        
        </div>
      </div>
      <div className ='row'>
      <button className="btn waves-effect waves-light" type="submit" value='login' name="action">Submit
    <i className="material-icons right">send</i>
  </button>  <span> or <Link to='/signup'>Signup</Link></span>
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