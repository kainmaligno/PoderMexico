import React from 'react'
import { Card, CardTitle } from 'react-materialize';


const StoreSummary = ({store}) => {
  console.log(store)
  return (
    <Card className='small'
    header={<CardTitle image='img/sample-1.jpg'>{store.nombre}naa de nombre</CardTitle>}
    actions={[<a href='#'>This is a Link</a>]}>
   nada {store.nombre}
  </Card>
  )
}

export default StoreSummary
