import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Layout from '../components/layout';

const Home = () => (
  <Layout showNavbar>
    <Container
      style={{
        width: '70%',
        margin: '10px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>Rent the Best Bikes!!</h1>
      <Card className="text-center my-2">
        <Card.Header>7 hours ago</Card.Header>
        <Card.Body>
          <Card.Title>¡Electric Bikes!</Card.Title>
          <Card.Text>
            As you press the pedal or spin the chainring, an electronic
            controller registers this sensor signal and provides power to the
            motor to assist the bike forward at a calculated speed and force.
            When pedaling is stopped or the brake is applied, the motor stops
            working.
          </Card.Text>
          <Button variant="primary">Go Catalogue</Button>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header>4 hours ago</Card.Header>
        <Card.Body>
          <Card.Title>!Old Bikes!</Card.Title>
          <Card.Text>
            As you press the pedal or spin the chainring, an electronic
            controller registers this sensor signal and provides power to the
            motor to assist the bike forward at a calculated speed and force.
            When pedaling is stopped or the brake is applied, the motor stops
            working.
          </Card.Text>
          <Button variant="primary">Go Catalogue</Button>
        </Card.Body>
      </Card>
    </Container>
  </Layout>
);

export default Home;
