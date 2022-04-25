import React from 'react';
import { stepCompleted } from '../features/shopBikeState/shopBikeSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContainerMain, MarginTop } from '../assets/styles';
import { useFormikContext } from 'formik';

const PreviousNextStep = ({ prev, nxt, name, errors, value, validate }) => {
  const dispatch = useDispatch();
  const { setErrors } = useFormikContext();
  console.log('errors', errors);
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
          Previous
        </Link>
        <Link
          onClick={() => {
            console.log('name', name);
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
          Next
        </Link>
      </MarginTop>
    </ContainerMain>
  );
};

export default PreviousNextStep;
