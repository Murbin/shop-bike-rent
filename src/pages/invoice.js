import React from 'react';
import * as ROUTES from '../utils/urls';
import Resume from '../pages/resume';
import Layout from '../components/layout';
import { ContainerReview, ButtonsContainer } from '../assets/styles';
import Button from '../components/button';
import { useDispatch } from 'react-redux';
import { updateHistory } from '../features/shopBikeState/shopBikeSlice';
import { useNavigate } from 'react-router-dom';
import '../assets/invoice.css';

const Invoice = ({ previous, next }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleHistory = () => {
    dispatch(updateHistory());
    navigate(ROUTES.HISTORY_RENT);
  };

  return (
    <Layout showNavbar addBackground>
      <ContainerReview>
        <ButtonsContainer>
          <Button to={previous} label={'Previous'} />
          <button className="buttonCustom" onClick={handleHistory}>
            History
          </button>
        </ButtonsContainer>
        <Resume />
      </ContainerReview>
    </Layout>
  );
};

export default Invoice;
