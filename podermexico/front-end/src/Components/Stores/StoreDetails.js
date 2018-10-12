import React, { Component } from "react";
import { Row, Col, Chip, Tag, Button, Icon, Table } from "react-materialize";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import StorageList from  '../Storage/StorageList'
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
        store
      });
      this.setState({
        owner: store.owner
      });
    } catch (error) {
      console.log(error);
    }
    this.props.get_storage()
    console.log(this.props)
  }
  checkRole = () => {
    if (this.state.owner.role === "ADMIN") {
      console.log("eres un admin");
      let userAvatar = this.state.owner.avatar;
      const { username, role } = this.state.owner;
      const { name, address, avatar, description } = this.state.store;
      return (
        <div>
        <h1>
          Bienvenido a la Tienda: {username}
        </h1>
         <Row>
          <Col s={12}>
            <Chip>
              <img src={avatar} alt="Contact Person" />
              {name}
            </Chip>
            <Tag>{description}</Tag>
            <Tag>{address}</Tag>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Chip>
              <img src={userAvatar} alt="Contact Person" />
              {username}
            </Chip>
            <Tag>{name}</Tag>
          </Col>
        </Row>
           <Row>
          <Col>
            <Link to="/create_storage">
              <Button waves="light" className="purple">
                <Icon right>storage</Icon>
                Crear Almacen
              </Button>
            </Link>
          </Col>
          <Col>
          {/* <div>
          almacen de :
          <StorageList/>
        </div> */}
          </Col>
        </Row>
        <hr/>

        </div>
      )
    } else if (this.state.owner.role === "COSTUMER") {
      console.log("tu eres un cliente");
      return (
        <div>
          
        </div>
      )
    }
  };
  render() {
    console.log(this.props.storage.storage)
    const {storage} = this.props.storage
    return (
      <div className="section">
        <Navbar />
        
        {this.checkRole()}
        <StorageList storage={storage}/>
      </div>
    );
  }
}

const mapStateToProps = (storage) => ({
  storage: storage
})

export default connect(mapStateToProps,{get_storage})(StoreDetails)
