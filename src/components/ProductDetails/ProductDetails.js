import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product] = useProductDetails(productId);
  const { supplierName, productName, description, img, price, quantity } =
    product;
  return (
    <Card className="container mx-auto my-4">
      <Card.Img
        className="mx-auto"
        src={img}
        style={{ height: "200px", width: "350px" }}
        alt="Card image"
      />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>Supplier: {supplierName}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Quantity: {quantity}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
