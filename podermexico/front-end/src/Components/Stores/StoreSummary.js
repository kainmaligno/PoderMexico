import React from "react";
import { Card, CardTitle, Col } from "react-materialize";

const StoreSummary = ({ store }) => {
  return (
    <div className="container">
       
       <Card
        className="large"
        header={<CardTitle image={store.avatar}>{store.name}</CardTitle>}
        actions={[<a href="/store_details/:id">Ir a la tienda</a>]}
      >
        {store.description}
        <hr />
        Direccion:
        {store.address} <hr /> y le pertenece a {store.owner}
      </Card>
       
     
    </div>
  );
};

export default StoreSummary;
