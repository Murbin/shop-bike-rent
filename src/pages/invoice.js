import React from 'react';
import Resume from '../pages/resume';
import Layout from '../components/layout';
import { ContainerReview, ButtonsContainer } from '../assets/styles';
import Button from '../components/button';
import { useDispatch } from 'react-redux';
import { updateHistory } from '../features/shopBikeState/shopBikeSlice';
import { useNavigate } from 'react-router-dom';

const Invoice = ({ previous, next }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleHistory = () => {
    dispatch(updateHistory());
    navigate(`/history-rent`);
  };

  return (
    <Layout showNavbar addBackground>
      <ContainerReview>
        <ButtonsContainer>
          <Button to={previous} label={'Previous'} />
          <button
            onClick={handleHistory}
            style={{
              textAlign: 'center',
              background: 'white',
              width: 100,
              padding: 7,
              marginRight: 26,
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 20,
              borderWidth: 0
            }}
          >
            History
          </button>
        </ButtonsContainer>
        <Resume />
      </ContainerReview>
    </Layout>
  );
};

export default Invoice;
