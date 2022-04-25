import React, { useEffect } from 'react';
import { incrementAsync } from '../features/shopBikeState/apis/listBikes';
import Layout from '../components/layout';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { selectBikes } from '../features/shopBikeState/shopBikeSlice';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Catalogue = () => {
  const dispatch = useDispatch();
  const bikes = useSelector(selectBikes);

  useEffect(() => {
    dispatch(incrementAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Layout showNavbar showFilter>
      <Row
        style={{
          justifyContent: 'space-around',
          width: '80%',
          margin: '20px auto'
        }}
      >
        {bikes &&
          bikes.map((bike) => {
            return (
              <Col md={4} xs={12} style={{ marginBottom: 10 }} key={bike.id}>
                <Card
                  style={{
                    width: '100%',
                    height: 500,
                    margin: '0px auto'
                  }}
                >
                  <div
                    style={{
                      width: '100%',

                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 320
                    }}
                  >
                    <Card.Img src={bike.image} style={{}} />
                  </div>

                  <Card.Body style={{ height: '30%' }}>
                    <Card.Title style={{ fontSize: 16 }} className="text-muted">
                      {bike.name}
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer style={{ height: '10%', textAlign: 'center' }}>
                    <small
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20
                      }}
                    >
                      {bike.price}
                    </small>
                  </Card.Footer>
                  <Button style={{ background: '#6085FC' }}>Rent</Button>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Layout>
  );
};

export default Catalogue;
