import React from 'react';
import { eurosDE } from '../utils/helper';
import {
  ColCard,
  CardContainer,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter
} from '../assets/styles';

const Card = (props) => {
  const { bicycle } = props;

  return (
    <ColCard md={4} xs={12} key={bicycle.id}>
      <CardContainer>
        <CardImg src={bicycle.image} />
        <CardBody>
          <CardTitle>
            <span className="nameCardTest">{bicycle.name}</span>
          </CardTitle>
        </CardBody>
        <CardFooter>{eurosDE.format(bicycle.price)}</CardFooter>
      </CardContainer>
    </ColCard>
  );
};

export default Card;
