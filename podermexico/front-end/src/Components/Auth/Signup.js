import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, Icon, Row, Input, Navbar, Col} from "react-materialize";
//import { connect } from 'react-redux'
//import * as actions from '../../actions'
import axios from 'axios'
import { newUser } from '../../lib/authService';
import { uploadPhoto } from '../../lib/photoService'



class Signup extends Component {
  state = {
    user: "",
    username: "",
    password: "",
    role: '',
    photo: {}
  };

  componentWillReceiveProps({data}){
    if(data){
      const {user} = data
      this.setState({ user })
    }
    console.log(this.state.user)
  }

  inputChange = event => {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      [name]: value
    });
   
  };

  handleChangeP = e => {
    console.log(e.target.files[0])
    this.setState({
      photo: e.target.files[0]
    })
    
    
  }


  submit = event => {
    event.preventDefault();
    const {username, password, role} = this.state
    newUser(username, password, role) 
     .then(response =>{
     console.log(response.data)
     console.log('---------')
     let fd = new FormData()
     let postedBy = response.data.id
     console.log(postedBy)
     fd.append('photo',this.state.photo)
     axios.post(`http://localhost:3000/photo/add/`+postedBy,fd)
     .then(result => console.log(result))
     .catch(error => console.log(error))   
     })
     .catch(error=>{
       console.log(error)
     })
    
  };


  onRedirect = () => {
    return this.state.user === "" ? (
    
      <div className='container'>
      <form onSubmit={this.submit} encType="multipart/form-data">
      <h5>Inscribete</h5>
      <Row className=''>
         <Input onChange={this.inputChange}  name='username' type='text' s={6} label="Nombre de Usuario"><Icon>account_circle</Icon></Input> 
         <Input onChange={this.inputChange}  name='password' type="password" label="password" s={6}><Icon>lock</Icon></Input>
         <Input onChange={this.handleChangeP}  type="file"   label="File" s={12} />
         <button onClick={()=> console.log(this.state)}> Revisar URL</button>
         <Input onChange={this.inputChange}  name='role' s={12} type='select' label="Selecciona un Rol" defaultValue='COSTUMER'>
          <option value='ADMIN'>Administrador</option>
          <option value='COSTUMER'>Cliente</option>
        </Input>
      </Row>
      <Row>
            <Col>
              <Button waves="light" className="purple">
                {" "}
                <Icon right>person_add</Icon>
                Crear Usuario
              </Button>
            </Col>
            <Col>
            <Link to="/login">
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
        
      </div>
      
    ) : (
      <Redirect to="/" />
    );
  };
  render() {
    return <div>{this.onRedirect()}</div>;
  }
}

// const mapStatetoProps = ({auth}) => {
//   return auth
// }connect(mapStatetoProps, actions)

    // let fd = new FormData()
    //   fd.append('photo',this.state.photo,this.state.photo.name)
    // //   axios.post(`http://localhost:3000/photo/add`, fd)
    //   .then(thing => console.log(thing))
    //   .catch(err => console.log(err))
    //this.props.signupUser(username,password,role)

export default Signup;
