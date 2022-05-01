import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Product.css"
import { useNavigate } from 'react-router-dom';

const Product = ({item}) => {
  const navigate = useNavigate();
    const{supplierName, productName, description,_id, img, price, quantity}=item
    const handleSeeMore =(id)=>{
      navigate(`/inventory/${id}`);
    }
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
        <Button onClick={()=>handleSeeMore(_id)} variant="primary">Update</Button>
        </Card.Footer>
      </Card>
  );
};

export default Product;
