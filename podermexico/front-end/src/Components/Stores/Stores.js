import React, { Component } from "react";
import swal from "sweetalert2";
import { Link, Redirect } from 'react-router-dom'
import {Button, Icon, } from 'react-materialize'
class Stores extends Component {

   state = {
        user:'',
        username:'',
        password: '',
        description: '',
        address: '',
        file: {},
        location: {}

   }

   inputChange = event => {
     const {target} = event
     const { name, value} = target
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
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.inputChange}
                name="username"
                id="username"
                type="text"
                className="validate"
              />
              <label htmlFor="username">User name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                onChange={this.inputChange}
                id="password"
                name="password"
                type="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              value="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>{" "}
            <span>
              {" "}
              or{" "}
              <Link to="/login">
                <Button waves="light">
                  <Icon right>account_circle</Icon>
                  Login
                </Button>
              </Link>
            </span>
            <Link to="/home">
              <Button waves="light">
                <Icon right>home</Icon>
                Home
              </Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Stores;
