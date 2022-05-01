import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Table } from "react-bootstrap";
import AllProduct from "../AllProduct/AllProduct";
import axios from "axios";
import { toast } from "react-toastify";

const MyItems = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const [products, setProducts] = useState([]);
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://tranquil-refuge-32723.herokuapp.com/products?email=${email}`;
      const { data } = await axios.get(url);
      setProducts(data);
    };
    getOrders();
  const handleDelete = (id) => {
    const process = window.confirm("Are you sure?");
    if (process) {
      const url = `https://tranquil-refuge-32723.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((p) => p._id !== id);
          setProducts(remaining);
          toast('Deleted a product')
        });
    }
  };
  return (
    <div>
      <h1 className="text-center">My Products</h1>
      <Table className="container my-4" bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Supplier Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <AllProduct
              key={p._id}
              handleDelete={handleDelete}
              item={p}
            ></AllProduct>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;
