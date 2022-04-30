import React from 'react';
import { anotherAsyncThunk } from '../features/shopBicycleState/apis/listBicycles';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { styleRow, styleCol, styleWidth } from '../assets/styles';

const Filter = () => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const type = e.target.value;
    dispatch(anotherAsyncThunk(type));
  };

  return (
    <Row style={styleRow}>
      <Col md={12} style={styleCol}>
        <Form.Select
          aria-label="Select a type"
          style={styleWidth}
          onChange={(e) => handleFilter(e)}
        >
          <option value="all">{t('all')}</option>
          <option value="electrics">{t('electrics')}</option>
          <option value="old">{t('old')}</option>
          <option value="normal">{t('normal')}</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default Filter;
