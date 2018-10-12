import React, { Component } from 'react'
import { Row,Button } from 'react-materialize';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { get_foods } from '../../actions/food'
import FoodList from '../FoodStands/FoodList'


class FoodDash extends Component {
 async  componentDidMount(){
    this.props.get_foods()
  }
  render() {
     //console.log(this.props.food.food)
     const {foods } = this.props.food.food
    //console.log(foods)  
    return( 
      
      <div className="dashboard">
      <Navbar/>
      <h3>Visita los puestos</h3>
      <Row > 
        <FoodList foods={foods}/> 
        <Link to='/newfood'>
        <Button floating fab='vertical' faicon='fa fa-plus' icon='add' className='red' large style={{bottom: '60px', right: '35px'}}/>
        </Link>
      </Row>
        
      </div>
    )
  }
}
const mapStateToProps = (foods) => ({
  food: foods
})
export default connect(mapStateToProps,{get_foods})(FoodDash)