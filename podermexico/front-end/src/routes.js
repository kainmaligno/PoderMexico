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
import CreateStore from './Components/Stores/CreateStore';
import StoreDetails from './Components/Stores/StoreDetails';
import StoreList from './Components/Stores/StoresList';
import StoreSummary from './Components/Stores/StoreSummary';
//STORAGES
import CreateStorage from './Components/Storage/CreateStorage';
import StorageDetails from './Components/Storage/StorageDetails';
import StorageSummary from './Components/Storage/StorageSummary';
//FOODSTANDS
import FoodStand from './Components/FoodStands/NewFood'
import Dashboard from './Components/Layout/Dashboard';


    export default () => <Router>
      <div>
      <Switch>
          <Route exact path = '/'     component = {Home}/>
          <Route  path = '/signup'        component = {Signup}/>
          <Route  path = '/private'       component = {Private}/>
          <Route  path = '/login'         component = {Login}/>
          <Route  path = '/dashboard'     component = {Dashboard}/>
          <Route  path = '/store_details/:id' component = {StoreDetails} />
          <Route  path = '/Store_list'    component = {StoreList} />
          <Route  path = '/create_store'  component = {CreateStore}/>
          <Route  path = '/store_summary' component = {StoreSummary} />
          <Route  path = '/create_storage' component = {CreateStorage}/>
          <Route  path = '/storage_details/:id' component = {StorageDetails}/>
          <Route  path = '/storage_summary' component = {StorageSummary}/>
          <Route  path ='/newfood'        component = {FoodStand}/>
          {/* <Route  path = '/' component = {} />
          <Route  path = '/' component = {} /> */}
         
      </Switch> 
      </div>
    </Router>
