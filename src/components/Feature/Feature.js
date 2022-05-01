import React from "react";
import { Card } from "react-bootstrap";

const Feature = ({ item }) => {
  const { img, name } = item;
  return (
    <div>
      <Card className="product-item">
        <Card.Img
          className="mt-3 mx-auto"
          style={{ height: "90px", width: "90px" }}
          variant="top"
          src={img}
        />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Feature;
