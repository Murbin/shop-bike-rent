import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectType,
  selectAmountRent,
  selectBicycles
} from '../features/shopBicycleState/shopBicycleSlice';
import { anotherAsyncThunk } from '../features/shopBicycleState/apis/listBicycles';
import { useDebouncedCallback } from 'use-debounce';
import Resume from '../pages/Resume';
import { eurosDE } from '../utils/helper';
import { ContainerMain, ContainerInput } from '../assets/styles';
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
    dispatch(anotherAsyncThunk(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const selectedBicycle = useDebouncedCallback((key, val, name) => {
    dispatch(saveData({ key, val, name }));
  }, 250);

  return (
    <ContainerMain>
      <ContainerInput>
        <Row
          style={{
            justifyContent: 'space-around',
            width: '100%'
          }}
        >
          {bicycles &&
            bicycles.map((bicycle) => {
              return (
                <Col
                  md={4}
                  xs={12}
                  style={{ marginBottom: 10 }}
                  key={bicycle.id}
                >
                  <Card
                    style={{
                      width: '100%',

                      margin: '0px auto'
                    }}
                  >
                    <Card.Img src={bicycle.image} style={{}} />

                    <Card.Body style={{ height: '25%' }}>
                      <Card.Title
                        style={{ fontSize: 15 }}
                        className="text-muted "
                      >
                        {bicycle.name}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer style={{ height: '10%', textAlign: 'center' }}>
                      <small
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20
                        }}
                      >
                        {eurosDE.format(bicycle.price)}
                      </small>
                    </Card.Footer>
                    <Button
                      style={{ background: '#6085FC' }}
                      onClick={() =>
                        selectedBicycle(
                          'amountRent',
                          bicycle.price,
                          bicycle.name
                        )
                      }
                    >
                      {t('group-by-card.rent')}
                    </Button>
                  </Card>
                </Col>
              );
            })}
        </Row>
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
