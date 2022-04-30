import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import {
  bicycles,
  bicyclesElectrics,
  bicyclesOlds,
  bicyclesNormal
} from '../../../fake-db/bicycles';

var mock = new MockAdapter(axios);

mock.onGet('/bicycles').reply(200, {
  bicycles: bicycles
});

export const getAllBicycles = createAsyncThunk(
  'shopBikeData/fetchBicycles',
  async () => {
    return await axios.get('/bicycles').then((res) => {
      return res.data.bicycles;
    });
  }
);

mock
  .onGet('/bicyclesElectrics', { params: { searchText: 'electrics' } })
  .reply(200, {
    bicyclesElectrics
  });

mock.onGet('bicyclesOlds', { params: { searchText: 'old' } }).reply(200, {
  bicyclesOlds
});

mock.onGet('bicyclesNormal', { params: { searchText: 'normal' } }).reply(200, {
  bicyclesNormal
});

export const getBicyclesByType = createAsyncThunk(
  'shopBikeData',
  async (search) => {
    if (search === 'electrics') {
      return await axios
        .get('/bicyclesElectrics', { params: { searchText: search } })
        .then((res) => {
          return res.data.bicyclesElectrics;
        });
    }
    if (search === 'old') {
      return await axios
        .get('/bicyclesOlds', { params: { searchText: search } })
        .then((res) => {
          return res.data.bicyclesOlds;
        });
    }
    if (search === 'normal') {
      return await axios
        .get('/bicyclesNormal', { params: { searchText: search } })
        .then((res) => {
          return res.data.bicyclesNormal;
        });
    }
    if (search === 'all') {
      return await axios.get('/bicycles').then((res) => {
        return res.data.bicycles;
      });
    }
  }
);
