import React from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddItem = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSubmit = e =>{
        e.preventDefault();
        
        const supplierName = e.target.sname.value;
        const productName = e.target.pemail.value;
        const email = e.target.email.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const img = e.target.img.value;
        const quantity = e.target.quantity.value;
        const item = {supplierName, productName, email, description, img, price, quantity}
        console.log(item);
    }
    return (
        <Form onSubmit={handleSubmit} className="w-50 mx-auto my-3">
        <Form.Group className="mb-3"controlId="formGridName">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control required name='sname' type="text" placeholder="Supplier Name" />
        </Form.Group>
        
        <Form.Group className="mb-3"controlId="formGridName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control required name='pname' type="text" placeholder="Product Name" />
        </Form.Group>
  
        <Form.Group className="mb-3"controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required value={user?.email} readOnly name='email' type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Image URL</Form.Label>
          <Form.Control required name='img' type='text' placeholder="https://image.jpg" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Description</Form.Label>
          <Form.Control name='description' type="text" placeholder="Item Info" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Price</Form.Label>
          <Form.Control name='price' type="number" placeholder="Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Quantity</Form.Label>
          <Form.Control name='quantity' type="number" placeholder="Quantity" />
        </Form.Group>
  
  
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check required type="checkbox" label="Check me out" />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    );
};

export default AddItem;