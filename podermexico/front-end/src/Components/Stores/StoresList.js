import React from 'react'
import StoreSummary from './StoreSummary';
import {Col} from 'react-materialize'

 const Storeslist = ({store}) => {
   const stores = store.stores
  return (
    <div className='container'>
         {stores && stores.map(store => {
           return (
             
             <StoreSummary store={store} key={store.id}/>
             
             
           )
         })}
         
    </div>
  )
}
export default Storeslist