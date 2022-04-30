import React from 'react';
import Resume from './Resume';
import Layout from '../components/Layout';
import { ContainerReview, ButtonsContainer } from '../assets/styles';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { updateHistory } from '../features/shopBicycleState/shopBicycleSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../assets/invoice.css';

const Invoice = ({ previous, next }) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleHistory = () => {
    dispatch(updateHistory());
    navigate(next);
  };

  return (
    <Layout showNavbar addBackground>
      <ContainerReview>
        <ButtonsContainer>
          <Button to={previous} label={t('previous')} />
          <button className="buttonCustom" onClick={handleHistory}>
            {t('invoice.history')}
          </button>
        </ButtonsContainer>
        <Resume />
      </ContainerReview>
    </Layout>
  );
};

export default Invoice;
