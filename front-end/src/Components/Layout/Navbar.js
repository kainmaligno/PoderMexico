import React, {Component } from "react";
import { NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from 'react-redux';
import power from '../../assets/podermexico.png'

class  Navbar extends Component {
   checkUser =() => {
     return (this.props.auth.username) ?  <SignedInLinks /> :  <SignedOutLinks />
   }
  render(){
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
        <ul>
          <li><NavLink to='/'> <img className='logo' src={power} alt="poder mexico"/></NavLink></li>
        </ul>
         {this.checkUser()}
        </div>
      </nav>
    );
  }
 
};
const mapStateToProps = ({ auth }) => ({
  auth: auth.user
})
export default connect(mapStateToProps)(Navbar)
