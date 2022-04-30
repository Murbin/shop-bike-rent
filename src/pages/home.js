import React from 'react';
import { ContainerHome, Title } from '../assets/styles';
import CardCustom from '../components/Card';
import { cardsData, titleHome } from '../utils/home-data';

const Home = () => (
  <ContainerHome>
    <Title>{titleHome}</Title>
    {cardsData.map((card, i) => {
      return <CardCustom card={card} key={i} />;
    })}
  </ContainerHome>
);

export default Home;
