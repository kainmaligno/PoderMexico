import React from 'react'
import FoodSummary from './FoodSummary';

const FoodList = ({foods}) => {
  //console.log(foods)
  return (
    <div className = 'container row' >
      {foods && foods.map(food => {
        return(
          <FoodSummary food={food} key={food.id}/>
        )
      })}
    </div>
  )
}

export default FoodList
