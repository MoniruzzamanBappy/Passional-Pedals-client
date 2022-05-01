import React from "react";
import { Button, Table } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import AllProduct from "../AllProduct/AllProduct";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [products, setProducts] = useProducts("products");
  const navigate = useNavigate();
  const handleAddItem = () => {
    navigate(`/addItem`);
  };
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
      <h1 className="text-center">All Products</h1>
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
      <div className="container my-4">
        <Button onClick={handleAddItem} variant="primary">
          Add Item
        </Button>
      </div>
    </div>
  );
};

export default AllProducts;
