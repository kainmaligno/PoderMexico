import React from 'react'
import { Card, CardTitle } from 'react-materialize';

const StoreDetails = (props) => {
  return (
    <div className='container section'>
      <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
    title="Card Title"
    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
    <p><a href="#">This is a link</a></p>
    </Card>
    </div>
  )
}

export default StoreDetails
