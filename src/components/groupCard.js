import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { eurosDE } from '../utils/helper';
import '../assets/groupCard.css';

const GroupCards = (props) => {
  const { bikes } = props;

  return (
    <Row className="containerGroupCard">
      {bikes &&
        bikes.map((bike) => {
          return (
            <Col md={4} xs={12} className="my-2" key={bike.id}>
              <Card className="w-100 mx-auto">
                <Card.Img src={bike.image} className="w-100" />
                <Card.Body style={{ height: '30%' }}>
                  <Card.Title className="text-muted h6">{bike.name}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-center h4 p-0 m-0">
                  {eurosDE.format(bike.price)}
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default GroupCards;
