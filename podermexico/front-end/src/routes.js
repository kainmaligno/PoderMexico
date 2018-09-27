import React from 'react';
import { BrowserRouter as Router,
    Route, Switch } from 'react-router-dom';
//AUTH
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';
import Private from './Components/Auth/Private';
//AUTH
import Signupstores from './Components/Auth/Sign-stores';
import Loginstores from './Components/Auth/Login-stores';
import Privatestores from './Components/Auth/Private-stores';
//TRANSVERSAL
import Home from './Components/Home';
//STORES
import Stores from './Components/Stores/Stores'
//FOODSTANDS
import FoodStand from './Components/FoodStands/NewFood'
import MapView from './Components/Maps/Map'
import MapComponent from './Components/Maps/MapComponent';
    export default () => <Router>
      <div className=''>
      <Switch>
          <Route exact path = '/home'     component = {Home}/>
          <Route  path = '/signup'        component = {Signup}/>
          <Route  path = '/private'       component = {Private}/>
          <Route  path = '/login'         component = {Login}/>
          <Route  path ='/signup_stores'  component = {Signupstores}/>
          <Route  path ='/private_stores' component = {Privatestores}/>
          <Route  path ='/login_stores'   component = {Loginstores}/>
          <Route  path = '/stores'        component = {Stores}/>
          <Route  path ='/newfood'        component = {FoodStand}/>
          <Route  path = '/map'           component = {MapView}/>
          <Route  path = '/mapcompo'      component = {MapComponent}/>
      </Switch>
       
      </div>
    </Router>
