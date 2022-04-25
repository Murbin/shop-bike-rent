import React from 'react';
import Resume from '../pages/resume';
import Layout from '../components/layout';
import { ContainerReview, ButtonsContainer } from '../assets/styles';
import Button from '../components/button';

const Invoice = ({ previous, next }) => {
  return (
    <Layout showNavbar addBackground>
      <ContainerReview>
        <ButtonsContainer>
          <Button to={previous} label={'Previous'} />
          <Button to={next} label={'Finish'} />
        </ButtonsContainer>
        <Resume />
      </ContainerReview>
    </Layout>
  );
};

export default Invoice;
