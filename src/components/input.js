import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from '../pages/Resume';
import PreviousNextStep from '../components/PreviousNextStep';
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  Error,
  styleInput
} from '../assets/styles';
import Layout from '../components/Layout';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(saveData({ key, val }));
  }, 250);
  const data = useSelector(getData);

  return (
    <Layout showNavbar>
      <ContainerMain>
        <ContainerInput>
          <LabelInput>{t(name)}</LabelInput>
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
          {errors[name] && <Error>{t(errors[name])}</Error>}
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
