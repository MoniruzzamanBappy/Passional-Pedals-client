import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const { register, handleSubmit } = useForm();
  // const [upQuantity, setUpQuantity] = useState();
  // const [product] = useProductDetails(productId);

  // setUpQuantity(quantity);

  const [product, setProduct] = useState({});
  const { supplierName, productName, description, _id, img, price, quantity } =
    product;
  function getProduct() {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }

  getProduct();
  const handleDelivered = (id) => {
    const deliveredQuantity = quantity - 1;
    const url = `http://localhost:5000/products/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ deliveredQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product Delivered successfully");
        getProduct();
        // setUpQuantity(data);
      });
  };

  const onSubmit = (data) => {
    const deliveredQuantity = parseInt(quantity) + parseInt(data.quantity);
    const url = `http://localhost:5000/products/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ deliveredQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product added successfully");
        getProduct();
        // setUpQuantity(data);
      });
  };

  return (
    <div>
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
      <div className="d-flex justify-content-around mb-4">
        <Button onClick={() => handleDelivered(_id)} variant="primary">
          Delivered
        </Button>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="New Quantity"
              type="number"
              {...register("quantity", { required: true })}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
