import React, { lazy, useEffect } from 'react';
import { ContainerHome } from '../assets/styles';

const Animation3D = lazy(() => import('../components/3d/Animation3D'));

const Home = () => {
  return <ContainerHome>{/* <Animation3D /> */}</ContainerHome>;
};

export default Home;
