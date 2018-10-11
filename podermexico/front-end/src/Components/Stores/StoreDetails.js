import React,{Component} from "react";
import { Row,Col,Chip,Tag,Button,Icon} from "react-materialize";
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from "../Layout/Navbar";

class StoreDetails extends Component {
  state={
    store:{}
  }
 async  componentDidMount(){
    try{
      let storeid = this.props.match.params.id
      const res = await axios.get(`http://localhost:3000/store/${storeid}`)
      let store = res.data
      console.log(store)
      this.setState({
        store
      })
    }catch(error){
    console.log(error)
    }
  }
  render() {
    console.log(this.state)
    const {name, address,avatar,description} = this.state.store
    return (
      <div className="section">
        <Navbar />
        <h1>Bienvenido a la Tienda:{name}</h1>
        <Row>
  <Col s={12}>
    <Chip>
      <img src={avatar} alt='Contact Person' />
      {address}
    </Chip>
    <Tag>{description}</Tag>
  </Col>
</Row>
   {/* botonera */}
   <Row>
     <Col>
       <Link to='/create_storage'>
          <Button waves='light' className='purple'><Icon right>storage</Icon>Crear Almacen</Button>
       </Link>
     </Col>
   </Row>
      </div>
    );
  }
}
export default StoreDetails;
