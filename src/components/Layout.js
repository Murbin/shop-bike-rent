import React from 'react';
import Navbar from './Navbar';
import { ContainerLayout, ContainerChildren } from '../assets/styles';

const Layout = ({ children }) => {
  return (
    <ContainerLayout>
      <Navbar />
      <ContainerChildren>{children}</ContainerChildren>
    </ContainerLayout>
  );
};

export default Layout;
