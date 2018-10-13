import React from 'react'
import StorageSummary from './StorageSummary';

const StorageList = ({storage}) => {
  console.log('estas son las props',storage.storage)

  return (
    <div className='container'>
        {/* <StorageSummary storageone={storage}/> */}
      { storage.storage.map(storageoone => {
        return(
          <StorageSummary storageone={storageoone}/>
        )
      })}
    </div>
  )
}

export default StorageList
