import React from 'react';
import { BrowserRouter as Router,
    Route, Switch } from 'react-router-dom';
//AUTH
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Private from './Components/Auth/Private';
//TRANSVERSAL
import Home from './Components/Home';
//STORES
import Stores from './Components/Stores/Stores'

    export default () => <Router>
      <div className=''>
      <Switch>
          <Route exact path = '/home' component = {Home}/>
          <Route  path = '/signup'   component  = {Signup}/>
          <Route  path = '/private'  component  = {Private}/>
          <Route  path = '/login'    component  = {Login}/>
          <Route  path = '/stores'   component  = {Stores}/>
      </Switch>
       
      </div>
    </Router>
