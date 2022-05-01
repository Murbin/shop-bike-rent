import React, { lazy } from 'react';
import { ContainerHome } from '../assets/styles';

const Animation3D = lazy(() => import('../3d/Animation3D'));

const Home = () => (
  <ContainerHome>
    <Animation3D />
  </ContainerHome>
);

export default Home;
