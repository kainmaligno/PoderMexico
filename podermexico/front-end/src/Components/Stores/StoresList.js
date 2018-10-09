import React from 'react'
import StoreSummary from './StoreSummary';


 const Storeslist = ({stores}) => {
   console.log(stores)
  return (
    <div className='container'>
     {stores && stores.map(store => {
        return(
          <StoreSummary store={store} key={store.id}/>
        )
     })}
    </div>
  )
}
export default Storeslist