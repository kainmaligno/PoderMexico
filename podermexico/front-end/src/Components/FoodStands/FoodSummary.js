import React from "react";
import { Card, CardTitle,Tag, Row, Col, Chip } from "react-materialize";


const FoodSummary = ({ food }) => {
  console.log(food)
  return (
    <div className="container">
      <Card
        className="medium"
        header={<CardTitle image={food.img}>{food.name}</CardTitle>}
        actions={[<a href="#">This is a Link</a>]}
      >
        <Row>
        <Col s={12}>
          <Chip>
            <img src={food.img} alt="Contact Person" />
            {food.postedBy}
          </Chip>
          <Tag>{food.select}</Tag>
        </Col>
      </Row>
      </Card>
      
    </div>
  );
};

export default FoodSummary;
