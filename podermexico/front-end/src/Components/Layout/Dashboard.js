import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';
import StoresList from '../Stores/StoresList';
import Navbar from './Navbar';
class Dashboard extends Component {
  render() {
    return(
     
      <div className="dashboard container">
       <Navbar/>
      <Row>
        <Col s={12} m={6}>
          <StoresList />
        </Col>
        <Col>
         {/* noticias */}
        </Col>
      </Row>
        
      </div>
    )
  }
}

export default Dashboard