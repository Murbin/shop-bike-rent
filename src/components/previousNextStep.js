import React from 'react';
import { stepCompleted } from '../features/shopBicycleState/shopBicycleSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContainerMain, MarginTop } from '../assets/styles';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';

const PreviousNextStep = ({ prev, nxt, name, errors, value, validate }) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const { setErrors } = useFormikContext();

  const next = async () => {
    if (!errors?.value && value) {
      const stepsCompleted = 'stepsCompleted';
      dispatch(stepCompleted({ stepsCompleted, name }));
    }
  };

  return (
    <ContainerMain>
      <MarginTop>
        <Link
          style={{
            marginRight: 20,
            textDecoration: 'none',
            color: '#6085FC',
            fontWeight: 'bold'
          }}
          to={prev}
        >
          {t('previous')}
        </Link>
        <Link
          onClick={() => {
            validate(
              name !== 'price' ? name : { target: { value: value } },
              setErrors
            );
            next();
          }}
          style={{
            textDecoration: 'none',
            color: '#6085FC',
            fontWeight: 'bold'
          }}
          to={errors[name] || !value ? '#' : nxt}
        >
          {t('next')}
        </Link>
      </MarginTop>
    </ContainerMain>
  );
};

export default PreviousNextStep;
