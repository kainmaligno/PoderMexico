import React, { Component } from 'react'
import { Row, Col } from 'react-materialize';
import StoresList from '../Stores/StoresList';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { get_foods } from '../../actions/food'
import FoodList from '../FoodStands/FoodList'


class FoodDash extends Component {
 async  componentDidMount(){
    this.props.get_foods()
  }
  render() {
     console.log(this.props.food.food)
     const {foods } = this.props.food.food
     console.log(foods)  
    return( 
      
      <div className="dashboard">
      <Navbar/>
      <h3>Visita los puestos</h3>
      <Row > 
        <FoodList foods={foods}/> 
      </Row>
        
      </div>
    )
  }
}
const mapStateToProps = (foods) => ({
  food: foods
})
export default connect(mapStateToProps,{get_foods})(FoodDash)