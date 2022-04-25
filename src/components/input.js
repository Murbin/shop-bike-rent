import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from '../pages/resume';
import PreviousNextStep from '../components/previousNextStep';
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  Error,
  styleInput
} from '../assets/styles';
import Layout from '../components/layout';

const Input = ({
  name,
  errors,
  handleChange,
  validateField,
  getData,
  saveData,
  previous,
  next,
  placeholder,
  type,
  validate
}) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(saveData({ key, val }));
  }, 250);
  const data = useSelector(getData);

  return (
    <Layout showNavbar>
      <ContainerMain>
        <ContainerInput>
          <LabelInput>{name.toLocaleUpperCase()}</LabelInput>
          <Field
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={(val) => {
              handleChange(val);
              updateValFromStore(name, val);
            }}
            validate={validate}
            style={styleInput}
            values={data}
          />
          {errors[name] && <Error>{errors[name]}</Error>}
          <PreviousNextStep
            prev={previous}
            nxt={next}
            name={name}
            errors={errors}
            value={data}
            validate={validateField}
          />
        </ContainerInput>
        <Resume />
      </ContainerMain>
    </Layout>
  );
};

export default Input;
