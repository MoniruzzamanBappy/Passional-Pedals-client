import React from 'react';
import { Card } from 'react-bootstrap';

const AboutPadals = ({item}) => {
    const {name, img, about} = item;
    return (
        <Card className="product-item">
        <Card.Img className='mt-3 mx-auto' style={{'height': '90px', 'width': '90px'}} variant="top" src={img} />
        <Card.Body  className='text-center'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
        </Card.Body>
        
      </Card>
    );
};

export default AboutPadals;