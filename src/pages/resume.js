import React from 'react';
import { selectResume } from '../features/shopBikeState/shopBikeSlice';
import { useSelector } from 'react-redux';
import { eurosDE } from '../utils/helper';
import Steps from '../components/stepper';
import { ContainerResume, Text, Title } from '../assets/styles';

const Resume = () => {
  const { username, type, days, amountRent, points, name } =
    useSelector(selectResume);

  return (
    <ContainerResume>
      {' '}
      <Steps />
      <Title>Data of Rent </Title>
      <Text>Name : {username}</Text>
      <Text>Type: {type}</Text>
      <Text>Points: {points}</Text>
      <Text>Days: {days}</Text>
      <Text>Bike: {name}</Text>
      <Title>
        Amount Rent : {amountRent ? eurosDE.format(amountRent) : 0}{' '}
      </Title>
    </ContainerResume>
  );
};

export default Resume;
