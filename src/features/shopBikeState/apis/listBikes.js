import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { bikes } from '../../../fake-db/bikes';

var mock = new MockAdapter(axios);

mock.onGet('/bikes').reply(200, {
  bikes
});

const incrementAsync = createAsyncThunk('shopBikeData/fetchBikes', async () => {
  return await axios.get('/bikes').then((res) => {
    return res.data.bikes;
  });
});

export default incrementAsync;
