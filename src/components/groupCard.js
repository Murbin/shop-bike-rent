import React from 'react';
import { eurosDE } from '../utils/helper';
import {
  RowGroupCard,
  ColCard,
  CardContainer,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter
} from '../assets/styles';

const GroupCards = (props) => {
  const { bicycles } = props;

  return (
    <RowGroupCard>
      {bicycles &&
        bicycles.map((bicycles) => {
          return (
            <ColCard md={4} xs={12} key={bicycles.id}>
              <CardContainer>
                <CardImg src={bicycles.image} />
                <CardBody>
                  <CardTitle>{bicycles.name}</CardTitle>
                </CardBody>
                <CardFooter>{eurosDE.format(bicycles.price)}</CardFooter>
              </CardContainer>
            </ColCard>
          );
        })}
    </RowGroupCard>
  );
};

export default GroupCards;
