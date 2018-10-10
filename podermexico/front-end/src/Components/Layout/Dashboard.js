import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';
import StoresList from '../Stores/StoresList';
import Navbar from './Navbar';
import { connect } from 'react-redux';
class Dashboard extends Component {
  render() {
    //console.log(this.props)
    const {stores} = this.props
    console.log(stores)
    return(
     
      <div className="dashboard container">
       <Navbar/>
      <Row>
        <Col s={12} m={6}>
          <StoresList stores={stores}/>
        </Col>
        <Col>
         {/* noticias */}
        </Col>
      </Row>
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    store:state.store.store //ultimo parametro es el que esta en el storeReducer
  }
}
export default connect(mapStateToProps)(Dashboard)