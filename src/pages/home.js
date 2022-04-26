import React from 'react';
import { ContainerHome, Title } from '../assets/styles';
import Layout from '../components/layout';
import CardCustom from '../components/card';
import { cardsData, titleHome } from '../utils/home-data';

const Home = () => (
  <Layout showNavbar>
    <ContainerHome>
      <Title>{titleHome}</Title>
      {cardsData.map((card, i) => {
        return <CardCustom card={card} key={i} />;
      })}
    </ContainerHome>
  </Layout>
);

export default Home;
