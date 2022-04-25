import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectType,
  selectBikes,
  updateAmount,
  selectAmountRent
} from '../features/shopBikeState/shopBikeSlice';
import { anotherAsyncThunk } from '../features/shopBikeState/apis/listBikes';
import { useDebouncedCallback } from 'use-debounce';
import Resume from '../pages/resume';
import { eurosDE } from '../utils/helper';
import { ContainerMain, ContainerInput } from '../assets/styles';
import Layout from '../components/layout';
import PreviousNextStep from '../components/previousNextStep';

const GroupCardByType = ({ name, errors, validateField, previous, next }) => {
  const dispatch = useDispatch();
  const type = useSelector(selectType);
  const bikes = useSelector(selectBikes);
  const amount = useSelector(selectAmountRent);

  useEffect(() => {
    dispatch(anotherAsyncThunk(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const selectedBike = useDebouncedCallback((key, val, name) => {
    dispatch(updateAmount({ key, val, name }));
  }, 250);

  return (
    <Layout showNavbar>
      <ContainerMain>
        <ContainerInput>
          <Row
            style={{
              justifyContent: 'space-around',
              width: '100%'
            }}
          >
            {bikes &&
              bikes.map((bike) => {
                return (
                  <Col
                    md={4}
                    xs={12}
                    style={{ marginBottom: 10 }}
                    key={bike.id}
                  >
                    <Card
                      style={{
                        width: '100%',

                        margin: '0px auto'
                      }}
                    >
                      <Card.Img src={bike.image} style={{}} />

                      <Card.Body style={{ height: '25%' }}>
                        <Card.Title
                          style={{ fontSize: 15 }}
                          className="text-muted "
                        >
                          {bike.name}
                        </Card.Title>
                      </Card.Body>
                      <Card.Footer
                        style={{ height: '10%', textAlign: 'center' }}
                      >
                        <small
                          style={{
                            fontWeight: 'bold',
                            fontSize: 20
                          }}
                        >
                          {eurosDE.format(bike.price)}
                        </small>
                      </Card.Footer>
                      <Button
                        style={{ background: '#6085FC' }}
                        onClick={() =>
                          selectedBike('amountRent', bike.price, bike.name)
                        }
                      >
                        Rent
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
    </Layout>
  );
};

export default GroupCardByType;
