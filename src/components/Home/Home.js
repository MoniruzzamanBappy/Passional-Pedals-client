import React from "react";
import { Button, Carousel, Form, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Product from "../Product/Product";
import "./Home.css";
import AboutPadals from "./../AboutPadals/AboutPadals";
import { useNavigate } from "react-router-dom";
import Feature from "../Feature/Feature";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigate = useNavigate();
  const [products] = useProducts("products");
  const [abouts] = useProducts("abouts");
  const [features] = useProducts("features");
  const handleSeeAll = () => {
    navigate("/manageInventory");
  };
  const handleSubmitContact = (event)=>{
    event.preventDefault();
    toast('Message Send')
  }
  return (
    <div>
      <Helmet>
        <title>Passional Pedals</title>
      </Helmet>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/jV48t13/cyclist-resting-silhouette-sunset-active-outdoor-sport-concept.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Health Booster</h3>
            <p>
              Riding a bike is healthy, fun and a low-impact form of exercise
              for all ages.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/sVN93DR/mountain-bike-cyclist-standing-top-mountain-with-bicycle.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Fresh Mind</h3>
            <p>
              Cycling is easy to fit into your daily routine by riding to the
              shops, park, school or work.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/48sz7NL/cyclist-sunny-day-bike-adventure-travel-photo.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Personal Doctor</h3>
            <p>Cycling can help to protect you from serious diseases.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="text-center my-3">Padals Products</h1>
      <Row xs={1} md={2} lg={3} className="container mx-auto">
        {products.slice(0, 6).map((p) => (
          <Product key={p._id} item={p}></Product>
        ))}
      </Row>
      <div className="container text-center my-2">
        <Button onClick={handleSeeAll} variant="primary">
          Manage Inventory
        </Button>
      </div>
      <hr className="container" />
      <h1 className="text-center my-3">About Padals</h1>

      <Row xs={1} md={2} lg={3} className="container  mx-auto g-4">
        {abouts.map((p) => (
          <AboutPadals key={p._id} item={p}></AboutPadals>
        ))}
      </Row>

      <hr className="container" />
      <h1 className="text-center my-3">Features</h1>

      <Row xs={1} md={2} lg={3} className="container  mx-auto g-4">
        {features.map((p) => (
          <Feature key={p._id} item={p}></Feature>
        ))}
      </Row>

      <hr className="container" />
      <h1 className="text-center my-3">Contact us</h1>
      <Form onSubmit={handleSubmitContact} className="container w-50  mb-3">
          <Form.Group controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>


        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder="Your inquiries" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="Your phone no." />
        </Form.Group>

       
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Home;
