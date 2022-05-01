import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useProductDetails from './../../hooks/useProductDetails';

const ProductDetails = () => {
  const { productId } = useParams();
  const { register, handleSubmit } = useForm();
  const [product, setProduct] = useProductDetails(productId);
  
  const { supplierName, productName, description, _id, img, price, quantity } =
  product;
  let q = quantity;
//  console.log(product);
  const handleDelivered = async (id) => {
    const deliveredQuantity = quantity - 1;
    const url = `http://localhost:5000/products/${id}`;

    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ deliveredQuantity }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     toast("Product Delivered successfully");
        
    //   });

    const {data} = await axios.put(url, {deliveredQuantity});
    setProduct(data);
    toast("Product delivered successfully");

  };

  const onSubmit =async (fdata) => {
    const deliveredQuantity = parseInt(quantity) + parseInt(fdata.quantity);
    const url = `http://localhost:5000/products/${_id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ deliveredQuantity }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     toast("Product added successfully");
       
    //   });
    const {data} = await axios.put(url, {deliveredQuantity});
    setProduct(data);
    toast("Quantity added successfully");
    fdata.target.reset()
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
          
          <Card.Text>Quantity: {q}</Card.Text>
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
