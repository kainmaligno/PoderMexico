import React, {Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from 'react-redux';

class  Navbar extends Component {
  
   checkUser =() => {
     return (localStorage.getItem('user')) ?  <SignedInLinks /> :  <SignedOutLinks />
   }
  render(){
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            Poder Mexico
          </Link>
         {this.checkUser()}
        </div>
      </nav>
    );
  }
 
};
const mapStateToProps = ({ auth }) => auth
export default connect(mapStateToProps)(Navbar)
