import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/jV48t13/cyclist-resting-silhouette-sunset-active-outdoor-sport-concept.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Health Booster</h3>
            <p>Riding a bike is healthy, fun and a low-impact form of exercise for all ages.</p>
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
            <p>Cycling is easy to fit into your daily routine by riding to the shops, park, school or work.</p>
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
            <p>
            Cycling can help to protect you from serious diseases.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
