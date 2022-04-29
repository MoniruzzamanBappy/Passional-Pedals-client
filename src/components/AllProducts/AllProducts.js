import React from "react";
import { Table } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import AllProduct from "../AllProduct/AllProduct";

const AllProducts = () => {
  const [products, setProducts] = useProducts("products");
  const handleDelete = (id)=>{
    const process = window.confirm('Are you sure?')
    if(process){
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining = products.filter(p=>p._id !== id);
            setProducts(remaining);
        })
    }
  }
  return (
    <div>
      <h1 className='text-center'>All Products</h1>
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
            <AllProduct key={p._id} handleDelete={handleDelete} item={p}></AllProduct>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllProducts;
