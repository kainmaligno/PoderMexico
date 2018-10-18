import React, {Component} from 'react'
import { Table } from 'react-materialize';
import { connect }from 'react-redux';


class StorageSummary extends Component{
  state={
     storage:{}
  }
   
  checkOwner = () => { 
    const tiendaId =  localStorage.getItem('storeId')
    console.log(tiendaId)
    //const propietarioId = this.props.storageone.belongStore
    const {storageone} = this.props
   
    if(this.props.auth.storage){
       return(
         <div>
           <h2>{this.props.storageone.name}</h2>
        <Table>
  <thead>
    <tr>
      <th data-field="id">Name</th>
      <th data-field="name">Item Name</th>
      <th data-field="price">Item Price</th>
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
  }
  render(){
    console.log(this.props)
    // console.log(localStorage.getItem('storeId'))
    return(
      <div>
       {this.checkOwner()}
        <span>No hay Almacen por el momento...</span>
       
      </div>
    )
  }    
}
const mapStateToProps = (auth) => ({
  auth:auth
})

export default connect(mapStateToProps)(StorageSummary)
