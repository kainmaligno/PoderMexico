import React from 'react';
import { BrowserRouter as Router,
    Route } from 'react-router-dom';

import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Private from './Components/Auth/Private';
import Header from './Components/Header';
import Home from './Components/Home';


    export default () => <Router>
      <div className='container'>
       <Route exact path = '/home' component = {Home}/>
        {/* <Route exact path = '/' component = {Header}/> */}
        <Route  path = '/signup'  component = {Signup}/>
        <Route  path = '/private' component = {Private}/>
        <Route  path = '/login' component = {Login}/>
      </div>
    </Router>
