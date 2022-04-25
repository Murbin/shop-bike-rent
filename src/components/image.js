import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import Resume from '../pages/resume';
import PreviousNextStep from '../components/previousNextStep';
import {
  ContainerMain,
  BackgroundDepartment,
  LabelInput
} from '../assets/styles';
import Layout from '../components/layout';

const Image = ({
  name,
  errors,
  handleChange,
  getData,
  saveData,
  previous,
  next,
  placeholder,
  type
}) => {
  const dispatch = useDispatch();
  const updateValFromStore = useDebouncedCallback((key, val) => {
    dispatch(saveData({ key, val }));
  }, 250);
  const data = useSelector(getData);

  const handleLoadLocalFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    handleChange(localImageUrl);
    updateValFromStore('image', localImageUrl);
  };

  return (
    <Layout showNavbar>
      <ContainerMain>
        <BackgroundDepartment>
          {data ? <img src={data} width={'70%'} alt={'bauch'} /> : null}
          <LabelInput>{placeholder}</LabelInput>
          <input
            name={name}
            id="my-upload-btn"
            type={type}
            accept=".jpg, .jpeg, .png .svg"
            onChange={handleLoadLocalFile}
          />
          <PreviousNextStep
            prev={previous}
            nxt={next}
            name={name}
            errors={errors}
            value={data}
            validate={() => {}}
          />
        </BackgroundDepartment>
        <Resume />
      </ContainerMain>
    </Layout>
  );
};

export default Image;
