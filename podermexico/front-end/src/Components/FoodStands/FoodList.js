import React from 'react'
import FoodSummary from './FoodSummary';

const FoodList = ({foods}) => {
  console.log(foods)
  return (
    <div className = 'container'>
      {foods && foods.map(food => {
        return(
          <FoodSummary food={food} />
        )
      })}
    </div>
  )
}

export default FoodList
