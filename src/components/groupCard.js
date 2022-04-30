import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { eurosDE } from '../utils/helper';
import { RowGroupCard } from '../assets/styles';

const GroupCards = (props) => {
  const { bicycles } = props;

  return (
    <RowGroupCard>
      {bicycles &&
        bicycles.map((bicycles) => {
          return (
            <Col md={4} xs={12} className="my-2" key={bicycles.id}>
              <Card className="w-100 mx-auto">
                <Card.Img src={bicycles.image} className="w-100" />
                <Card.Body style={{ height: '30%' }}>
                  <Card.Title className="text-muted h6">
                    {bicycles.name}
                  </Card.Title>
                </Card.Body>
                <Card.Footer className="text-center h4 p-0 m-0">
                  {eurosDE.format(bicycles.price)}
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
    </RowGroupCard>
  );
};

export default GroupCards;
