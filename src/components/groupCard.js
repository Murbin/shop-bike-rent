import React from 'react';
import { RowGroupCard } from '../assets/styles';
import Card from '../components/Card';

const GroupCards = (props) => {
  const { bicycles } = props;

  return (
    <RowGroupCard>
      {bicycles &&
        bicycles.map((bicycle, i) => {
          return <Card bicycle={bicycle} key={i} />;
        })}
    </RowGroupCard>
  );
};

export default GroupCards;
