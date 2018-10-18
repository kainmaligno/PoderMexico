import React, { Component } from "react";
import {
  Row,
  Col,
  Chip,
  Button,
  Icon,
  Card,
  CardTitle
} from "react-materialize";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import MapContainer from "../Maps/MapContainer";
import Footer from '../Layout/Footer';

class FoodDetail extends Component {
  state = {
    place: {},
    postedBy:{}
  };
  async componentDidMount() {
    try {
      let placeid = this.props.match.params.id;
      const res = await axios.get(`http://localhost:3000/foodstand/${placeid}`);
      let place = res.data;
      //console.log(place);
      this.setState({
        place
      });
      this.setState({
        postedBy:place.postedBy
      })
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log('este es el usuario que lo agrego',this.state);
    const { name, img, select, description } = this.state.place;
    const {username,avatar} = this.state.postedBy;
    return (
      <div className="section">
        <Navbar />
        <h1>
          Bienvenido a tu puesto:
          {name}
        </h1>
        <Row>
          <Col className="container" l={6} m={3} s={12}>
            <span>Stats</span>
            <Icon small left>
              insert_chart
            </Icon>

            <Card
              horizontal
              header={<CardTitle image={img} />}
              actions={[<Link to="/">Agregar Post?</Link>]}
            >  <p>Breve descripcion: {description}</p><hr/>
              <Row>
                <Col s={12}>
                  <Chip>
                    <img src={avatar} alt="Contact Person" />
                    Agregado por-{username}
                  </Chip>
                </Col>
               
              </Row>
              <hr/>
              <p>Categoria: {select}</p>
            </Card>
          </Col>
          <Col l={6} m={3} s={12}>
            <span>Locacion</span>
            <Icon small left>
              add_location
            </Icon>
            <MapContainer />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to='/food_dash'>
              <Button waves='light' classname='purple'><Icon left>arrow_back</Icon>regresar</Button>
            </Link>
          </Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}
export default FoodDetail;

//<a class="btn-floating btn-large purple pulse"><i class="material-icons">edit</i></a>
