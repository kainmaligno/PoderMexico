import React from 'react'
import StoreSummary from './StoreSummary';


 const Storeslist = ({stores}) => {

  return (
    <div className ='container row'>
         {stores && stores.map(store => {
           return (
            <StoreSummary store={store} key={store.id}/>
           )
         })}
         
    </div>
  )
}
export default Storeslist
