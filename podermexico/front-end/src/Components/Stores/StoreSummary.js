import React from "react";
import { Card, CardTitle, Col,Row,Chip,Tag } from "react-materialize";

const StoreSummary = ({ store }) => {
  return (
    <div className="container">
       <Card
        className=""
        header={<CardTitle image={store.avatar}>{store.name}</CardTitle>}
        actions={[<a href={'/store_details/'+store._id}>Compra algo yaa!!!</a>]}
      >
        {store.description}
        <hr />
        Direccion:
        {store.address} <hr /> 
        <Row>
        <Col s={12}>
          <Chip>
            Propiedad de {store.owner.username}
            <img src={store.owner.avatar} alt="Contact Person" /> 
          </Chip>
          <Tag>con la selecion de {store.name}</Tag>
        </Col>
      </Row>
      </Card>
       
     
    </div>
  );
};

export default StoreSummary;
