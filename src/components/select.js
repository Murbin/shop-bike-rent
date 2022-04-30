import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'formik';
import Resume from '../pages/Resume';
import PreviousNextStep from './PreviousNextStep';
import {
  ContainerMain,
  ContainerInput,
  LabelInput,
  ItemZone,
  Error,
  styleSelect
} from '../assets/styles';
import Layout from '../components/Layout';
import { useTranslation } from 'react-i18next';

const Select = ({
  name,
  errors,
  handleChange,
  validateField,
  getData,
  saveData,
  previous,
  next,
  type,
  validate,
  options,
  items
}) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val, child) => {
    dispatch(saveData({ key, val, child }));
  }, 250);
  const data = useSelector(getData);

  return (
    <Layout showNavbar>
      <ContainerMain>
        <ContainerInput>
          {items &&
            items.map((e, i) => {
              return (
                <ItemZone key={i}>
                  <>
                    <LabelInput>{t(e.label)}</LabelInput>
                    <Field
                      as={type}
                      name={e.section}
                      onChange={(val) => {
                        handleChange(val);
                        updateValFromStore(name, val, e.childName);
                      }}
                      validate={validate}
                      style={styleSelect}
                      values={data}
                    >
                      <option disabled={data ? true : false} value={undefined}>
                        {t(type)}
                      </option>
                      {options &&
                        options.map((e, idx) => (
                          <option key={idx}> {e} </option>
                        ))}
                    </Field>
                    {errors[name] && <Error>{t(errors[name])}</Error>}
                  </>
                </ItemZone>
              );
            })}
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

export default Select;
