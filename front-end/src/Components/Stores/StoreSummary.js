import React from "react";
import { Card, CardTitle, Col,Row,Chip } from "react-materialize";
import { Link } from 'react-router-dom'

const StoreSummary = ({ store }) => {
  return (
    <div className=" container col s12 m6 l4 xl3">
     <Card 
        className="large"
        header={<CardTitle  image={store.avatar}></CardTitle>}
        actions={[<Link to={'/store_details/'+store._id}>Compra algo yaa!!!</Link>]}
      >
     Nombre:{store.name} {store.description}
        <hr />
        Direccion:
        {store.address} <hr /> 
        <Row>
        <Col s={12}>
          <Chip>
            Propiedad de {store.owner.username}
            <img src={store.owner.avatar} alt="Contact Person" /> 
          </Chip>
          {/* <Chip>con la selecion de {store.name}</Chip> */}
        </Col>
      </Row>
      </Card>
     
      
       
     
    </div>
  );
};

export default StoreSummary;
//s12 m6 l4 xl3" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}