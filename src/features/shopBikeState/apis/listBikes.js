import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import {
  bikes,
  bikesElectrics,
  bikesOlds,
  bikesNormal
} from '../../../fake-db/bikes';

var mock = new MockAdapter(axios);

mock.onGet('/bikes').reply(200, {
  bikes: bikes
});

export const incrementAsync = createAsyncThunk(
  'shopBikeData/fetchBikes',
  async () => {
    return await axios.get('/bikes').then((res) => {
      return res.data.bikes;
    });
  }
);

mock
  .onGet('/bikesElectrics', { params: { searchText: 'electrics' } })
  .reply(200, {
    bikesElectrics
  });

mock.onGet('/bikesOlds', { params: { searchText: 'old' } }).reply(200, {
  bikesOlds
});

mock.onGet('/bikesNormal', { params: { searchText: 'normal' } }).reply(200, {
  bikesNormal
});

export const anotherAsyncThunk = createAsyncThunk(
  'shopBikeData',
  async (search) => {
    if (search === 'electrics') {
      return await axios
        .get('/bikesElectrics', { params: { searchText: search } })
        .then((res) => {
          return res.data.bikesElectrics;
        });
    }
    if (search === 'old') {
      return await axios
        .get('/bikesOlds', { params: { searchText: search } })
        .then((res) => {
          return res.data.bikesOlds;
        });
    }
    if (search === 'normal') {
      return await axios
        .get('/bikesNormal', { params: { searchText: search } })
        .then((res) => {
          return res.data.bikesNormal;
        });
    }
    if (search === 'all') {
      return await axios.get('/bikes').then((res) => {
        return res.data.bikes;
      });
    }
  }
);
