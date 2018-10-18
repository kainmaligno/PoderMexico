import React, { Component } from "react";
import { Row, Col, Chip, Tag, Button, Icon} from "react-materialize";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import MapContainer from "../Maps/MapContainer";
import StorageDetails from '../Storage/StorageDetails'
import StorageList from '../Storage/StorageList';
import { connect }from 'react-redux';
import { get_storage } from '../../actions/storage'


class StoreDetails extends Component {
  state = {
    store: {},
    owner: {}
  };
  
  async componentDidMount() {
    try {
      let storeid = this.props.match.params.id;
      const res = await axios.get(`http://localhost:3000/store/${storeid}`);
      let store = res.data;
      //console.log(res.data._id)
      localStorage.setItem('storeId',res.data._id)
      this.setState({
        store:store
      });
      this.setState({
        owner: store.owner
      });
    } catch (error) {
      console.log(error);
    }
    this.props.get_storage()
    //console.log(this.props.storage.auth.user.username)
    //console.log(this.state.owner.username)
  }
  checkRole = () => {
    return(this.props.storage.auth.user.role==='ADMIN' && this.props.storage.auth.user.username=== this.state.owner.username)? (
        <div>
         <Col>
            <Link to="/create_storage">
              <Button waves="light" className="purple">
                <Icon right>storage</Icon>
                Crear Almacen
              </Button>
            </Link>
          </Col><br/>
          <Col>
            <Link to="/dashboard">
              <Button waves="light" className="purple">
                <Icon right>send</Icon>
                todas las tiendas
              </Button>
            </Link>
          </Col>
        </div>
      ):(<Col>
        <Link to="/dashboard">
          <Button waves="light" className="purple">
            <Icon right>send</Icon>
            todas las tiendas
          </Button>
        </Link>
      </Col>)   
    }
  
  render() {
    //console.log(this.props.storage.storage)
    let userAvatar = this.state.owner.avatar;
    const { username } = this.state.owner;
    const { name, address, avatar, description } = this.state.store;
    const {storage} = this.props.storage
    return (
      <div className="section">
        <Navbar />
        <h1>
          Bienvenido a la Tienda: {name}
        </h1>
         <Row>
          <Col s={12} m={6} l={3}>
            <Chip>
              <img src={avatar} alt="Contact Person" />
              {name}
            </Chip>
            <Tag>{description}</Tag>
            <Tag>{address}</Tag>
          </Col> 
        
        
          <Col s={12} m={6} l={3}>
            <Chip>
              <img src={userAvatar} alt="Contact Person" />
              Propietario:{username}
            </Chip>
            <Tag>{name}</Tag>
          </Col>
          <Col>
            <MapContainer s={12} m={6} l={3}/>
          </Col>
        </Row>
        <hr/>
        {this.checkRole()}

        <StorageList storage={storage}/>
        <StorageDetails storage={storage}/>
      </div>
    );
  }
}

const mapStateToProps = (storage) => ({
  storage: storage
})

export default connect(mapStateToProps,{get_storage})(StoreDetails)
