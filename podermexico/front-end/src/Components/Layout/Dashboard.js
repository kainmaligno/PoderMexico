import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';
import StoresList from '../Stores/StoresList';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { get_stores } from '../../actions/store'
import * as actions from '../../actions'


class Dashboard extends Component {
  componentDidMount(){
    this.props.get_stores()
  }
  render() {
    console.log(this.props.store)
    const {store} = this.props
    console.log(store)  
    return( 
      
      <div className="dashboard">
      <Navbar/>
      <h3>Visita las tiendas</h3>
      <Row >
        
        <Col lx={4} l={5} m={8} s={12}>
        <StoresList store={store}/>
        </Col>
          
        
        
      </Row>
        
      </div>
    )
  }
}
const mapStateToProps = (stores) => ({
  store: stores.store
})
export default connect(mapStateToProps,{get_stores})(Dashboard)