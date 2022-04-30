import React from 'react';
import { stepCompleted } from '../features/shopBicycleState/shopBicycleSlice';
import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { ContainerMain, MarginTop, buttonLinkStep } from '../assets/styles';
import { Link } from 'react-router-dom';

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
        <Link style={buttonLinkStep} to={prev}>
          {t('previous')}
        </Link>
        <Link
          onClick={() => {
            validate(name, setErrors);
            next();
          }}
          style={buttonLinkStep}
          to={errors[name] || !value ? '#' : nxt}
        >
          {t('next')}
        </Link>
      </MarginTop>
    </ContainerMain>
  );
};

export default PreviousNextStep;
