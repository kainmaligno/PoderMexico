import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'sweetalert2/dist/sweetalert2.min.css'
//import 'materialize-css/js/dropdown'

//REDUX
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

const initialState ={}
const store = createStore (
  reducers, 
  initialState, 
  composeWithDevTools(
    applyMiddleware(reduxThunk)
    )
  )
 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>

, document.getElementById('root'));
