import React from 'react';
import { selectHistory } from '../features/shopBikeState/shopBikeSlice';
import { useSelector } from 'react-redux';
import { Title } from '../assets/styles';
import Layout from '../components/layout';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const History = () => {
  const history = useSelector(selectHistory);

  return (
    <Layout showNavbar>
      <Container className="p-5">
        <Title>Histories Rent</Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Days</th>
              <th>Type</th>
              <th>Bike</th>
              <th>Amount</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{item.username}</td>
                  <td>{item.days}</td>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>{item.amountRent}</td>
                  <td>{item.points}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export default History;
