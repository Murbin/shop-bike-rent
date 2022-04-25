import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { bikes } from '../../../fake-db/bikes';

var mock = new MockAdapter(axios);

mock.onGet('/bikes', { params: { type: 'electrical' } }).reply(200, {
  bikes
});

const typeBike = createAsyncThunk('shopBikeData/fetchBikesByType', async () => {
  return await axios
    .get('/bikes', { params: { searchText: 'John' } })
    .then((res) => {
      return res.data.bikes;
    });
});

export default typeBike;
