import React from 'react'
import StoreSummary from './StoreSummary';


 const Storeslist = ({stores}) => {

  return (
    <div className ='container row'>
         {stores.map((store,i) => {
           return (
            <StoreSummary store={store} key={i}/>
           )
         })}
         
    </div>
  )
}
export default Storeslist
