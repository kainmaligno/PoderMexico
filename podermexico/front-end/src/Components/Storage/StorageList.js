import React, {Component} from 'react';
import { Modal, Button, Input, Icon, Table } from 'react-materialize';
const $ = window.$
class StorageList extends Component {
   state={
     modal:false,
     name: '',
     price:''
   }

   toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange = (e) =>{
   const {target} = e
   const {name,value} = target
   this.setState({
     [name]:value
   })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    alert('huevos')  
  }

  render(){
    
    return (
      <div>
          <Table>
  <thead>
    <tr>
      <th data-field="name">Item Name</th>
      <th data-field="price">Item Price</th>
    </tr>
  </thead>

  <tbody>
    
  </tbody>
</Table>
        <Modal
          header='Modal Header'
          trigger={<Button floating large className='purple' waves='light' icon='add' />}>
          <form onSubmit={this.onSubmit}>
          <Input onChange={this.onChange} name='name' placeholder="Agrega Producto" s={6} />
          <Input onChange={this.onChange} name='price' placeholder="Precio" s={6} />
          <Button><Icon right>send</Icon>Agregar Item</Button>
          </form>
        </Modal>      
      </div>
    )
  }
  
}

export default StorageList
