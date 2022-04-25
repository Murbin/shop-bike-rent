import React from 'react';
import { anotherAsyncThunk } from '../features/shopBikeState/apis/listBikes';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Filter = () => {
  const dispatch = useDispatch();

  const test = (e) => {
    const type = e.target.value;
    dispatch(anotherAsyncThunk(type));
  };

  return (
    <Row
      style={{
        justifyContent: 'space-around',
        width: '80%',
        margin: '20px auto'
      }}
    >
      <Col
        md={12}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}
      >
        <Form.Select
          aria-label="Select a type"
          style={{ width: 200 }}
          onChange={(e) => test(e)}
        >
          <option value="all">All</option>
          <option value="electrics">Electrics</option>
          <option value="old">Ancient</option>
          <option value="normal">Normal</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default Filter;
