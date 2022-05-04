import React from 'react';
import { selectResume } from '../features/shopBicycleState/shopBicycleSlice';
import { useSelector } from 'react-redux';
import { eurosDE } from '../utils/helper';
import Steps from '../components/Stepper';
import { ContainerResume, Text, Title } from '../assets/styles';
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation('translation');
  const { username, type, days, amountRent, points, name } =
    useSelector(selectResume);

  return (
    <ContainerResume>
      {' '}
      <Steps />
      <Title>{t('resume.info-data')} </Title>
      <Text>
        {t('name')} : {username}
      </Text>
      <Text>
        {t('type')} : {type}
      </Text>
      <Text>
        {t('days')} : {days}
      </Text>
      <Text>
        {t('bicycle')}: {name}
      </Text>
      <Text>
        {t('points')}: {points}
      </Text>
      <Title>
        {t('amount-rental')} : {amountRent ? eurosDE.format(amountRent) : 0}{' '}
      </Title>
    </ContainerResume>
  );
};

export default Resume;
