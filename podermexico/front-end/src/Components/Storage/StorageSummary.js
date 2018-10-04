import React from 'react'
import { Pagination, Table } from 'react-materialize';

const StorageSummary = (props) => {
  return (
    <div className='container'>
      <Pagination items={10} activePage={1} maxButtons={8} />
      <Table>
  <thead>
    <tr>
      <th data-field="id">Nombre</th>
      <th data-field="name">Nombre Item</th>
      <th data-field="price">Precio Item</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alvin</td>
      <td>Eclair</td>
      <td>$0.87</td>
    </tr>
    <tr>
      <td>Alan</td>
      <td>Jellybean</td>
      <td>$3.76</td>
    </tr>
    <tr>
      <td>Jonathan</td>
      <td>Lollipop</td>
      <td>$7.00</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default StorageSummary
