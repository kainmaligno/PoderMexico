import React from 'react'
import StoreSummary from './StoreSummary';


 const Storeslist = ({store}) => {
   const stores = store.stores
  return (
    <div className ='container row'>
         {stores &&  stores.map((store,i) => {
           return (
            <StoreSummary store={store} key={i}/>
           )
         })}
         
    </div>
  )
}
export default Storeslist
