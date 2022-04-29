import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css"

const Product = ({item}) => {
    const{supplierName, productName, description, img, price, quantity}=item
  return (
    
      <Card className="product-item">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {productName}</Card.Title>
          <Card.Text>Supplier: {supplierName}</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>Price: {price}</Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">See more</Button>
        </Card.Footer>
      </Card>
  );
};

export default Product;