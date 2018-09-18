import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import swal from 'sweetalert2'

class Signup extends Component{
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

  submit = event => {
    event.preventDefault()
    swal({
      type: 'success',
      title: 'Usuario Creado',
      text: this.state.username
    })
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
      <button className="btn waves-effect waves-light" type="submit"  value='submit' name="action">Submit
    <i className="material-icons right">send</i>
  </button>  <span> or <Link to='/login'>Login</Link></span>
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

export default Signup;