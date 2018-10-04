import React, {Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class  Navbar extends Component {
  state = {
    user: ''
  }
  componentWillReceiveProps({data}){
    (data === undefined)?
      this.setState({ user: '' }) :
      this.setState({ user: data.username })
  }
 
   signNav = ( ) => {
     return (this.state.user ==='') ?  <SignedInLinks /> :  <SignedOutLinks />
   }

  render(){
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Poder Mexico
          </Link>
         {this.signNav()}
        </div>
      </nav>
    );
  }
 
};

export default Navbar;
