import React from "react";
import { Card, CardTitle,Tag, Row, Col, Chip } from "react-materialize";


const FoodSummary = ({ food }) => {
  //console.log(food.id)
  return (
    <div className="container">
      <Card
        className="medium"
        header={<CardTitle image={food.img}>{food.name}</CardTitle>}
        actions={[<a href={'/food_detail/'+food._id}>Detalles del Lugar</a>]}
      >
        <Row>
        <Col s={12}>
          <Chip>
            <img src={food.postedBy.avatar} alt="Contact Person" />
            Agregado por:  {food.postedBy.username}
          </Chip>
          <Tag>{food.select}</Tag>
        </Col>
      </Row>
      </Card>
      
    </div>
  );
};

export default FoodSummary;
