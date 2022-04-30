import React from 'react';
import { selectHistory } from '../features/shopBicycleState/shopBicycleSlice';
import { useSelector } from 'react-redux';
import { Title } from '../assets/styles';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { eurosDE } from '../utils/helper';
import { useTranslation } from 'react-i18next';

const History = () => {
  const { t } = useTranslation('translation');
  const history = useSelector(selectHistory);
  let sum = 0;

  return (
    <Container className="p-5">
      <Title>{t('history.history-rent')}</Title>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{t('history.id')}</th>
            <th>{t('name')}</th>
            <th>{t('days')}</th>
            <th>{t('type')}</th>
            <th>{t('bicycle')}</th>
            <th>{t('amount')}</th>
            <th>{t('points')}</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, i) => {
            sum += item.points;
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.username}</td>
                <td>{item.days}</td>
                <td>{item.type}</td>
                <td>{item.name}</td>
                <td>
                  {item.amountRent ? eurosDE.format(item.amountRent) : null}
                </td>
                <td>{item.points}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p styles={{ fontSize: 10 }}>
        {t('total-points')} : {sum} *
      </p>
    </Container>
  );
};

export default History;
