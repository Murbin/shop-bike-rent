import React from 'react';
import Resume from './Resume';
import {
  ContainerReview,
  ButtonsContainer,
  ButtonLink
} from '../assets/styles';
import { useDispatch } from 'react-redux';
import { updateHistory } from '../features/shopBicycleState/shopBicycleSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Invoice = ({ previous, next }) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handlePrev = () => {
    navigate(previous);
  };

  const handleNext = () => {
    dispatch(updateHistory());
    navigate(next);
  };

  return (
    <ContainerReview>
      <ButtonsContainer>
        <ButtonLink onClick={handlePrev}>{t('previous')}</ButtonLink>
        <ButtonLink onClick={handleNext}>{t('invoice.history')}</ButtonLink>
      </ButtonsContainer>
      <Resume />
    </ContainerReview>
  );
};

export default Invoice;
