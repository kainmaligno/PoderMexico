import React, { Component } from 'react';
import Router from './routes'
import {connect} from 'react-redux'
import * as actions from './actions'

class App extends Component {
  componentWillMount(){
    this.props.loggedin()
  }
  render() {
    return (
     <div>
        <Router/>
     </div>
    )
  }
}

export default connect(null,actions)(App);
