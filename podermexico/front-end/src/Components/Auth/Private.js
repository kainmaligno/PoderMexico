import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Row, Parallax, Collapsible, CollapsibleItem, Col} from "react-materialize";
import chango from '../../assets/ioelegenate.jpg';

class Private extends Component {
  state = {
    user: ""
  };


  onRedirect = () => {
    return !this.state.user === "" ? (
      <Redirect to="/login" />
    ) : (
      
      <div className="container">
       <Parallax imageSrc='https://res.cloudinary.com/drakarzamael/image/upload/v1538703709/poder-mexico/1_m2gDBT_nc-iE7R4AM3sHBQ.jpg'/>
        <Row>
            <img src={localStorage.getItem('imgUser')}/> 
            <h1> Bienvenido: {localStorage.getItem('user')}</h1>
            <h1> Tu eres:{localStorage.getItem('role')}</h1>
        </Row>
        <Col>
            <Collapsible>
            <CollapsibleItem header='First' icon='filter_drama'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header='Second' icon='place'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header='Third' icon='whatshot'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
          </Collapsible>
            </Col>
         
      </div>
    );
  };

  render() {
    
    return <div>{this.onRedirect()}</div>;
  }
}


export default Private;
