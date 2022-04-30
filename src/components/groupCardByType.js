import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectType,
  selectAmountRent,
  selectBicycles
} from '../features/shopBicycleState/shopBicycleSlice';
import { getBicyclesByType } from '../features/shopBicycleState/apis/listBicycles';
import { useDebouncedCallback } from 'use-debounce';
import Resume from '../pages/Resume';
import { eurosDE } from '../utils/helper';
import {
  ContainerMain,
  ContainerInput,
  CardContainer,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  RowGroupByType,
  ButtonRent
} from '../assets/styles';
import PreviousNextStep from '../components/PreviousNextStep';
import { useTranslation } from 'react-i18next';

const GroupCardByType = ({
  name,
  getData,
  saveData,
  errors,
  validateField,
  previous,
  next
}) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const type = useSelector(selectType);
  const bicycles = useSelector(selectBicycles);
  const amount = useSelector(selectAmountRent);

  useEffect(() => {
    dispatch(getBicyclesByType(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const selectedBicycle = useDebouncedCallback((key, val, name) => {
    dispatch(saveData({ key, val, name }));
  }, 250);

  return (
    <ContainerMain>
      <ContainerInput>
        <RowGroupByType>
          {bicycles &&
            bicycles.map((bicycle) => {
              return (
                <Col md={4} xs={12} key={bicycle.id}>
                  <CardContainer>
                    <CardImg src={bicycle.image} style={{}} />
                    <CardBody>
                      <CardTitle>{bicycle.name}</CardTitle>
                    </CardBody>
                    <CardFooter>{eurosDE.format(bicycle.price)}</CardFooter>
                    <ButtonRent
                      onClick={() =>
                        selectedBicycle(
                          'amountRent',
                          bicycle.price,
                          bicycle.name
                        )
                      }
                    >
                      {t('group-by-card.rent')}
                    </ButtonRent>
                  </CardContainer>
                </Col>
              );
            })}
        </RowGroupByType>
        <PreviousNextStep
          prev={previous}
          nxt={next}
          name={name}
          errors={errors}
          value={amount}
          validate={validateField}
        />
      </ContainerInput>
      <Resume />
    </ContainerMain>
  );
};

export default GroupCardByType;
