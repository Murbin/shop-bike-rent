import { createSlice } from '@reduxjs/toolkit';
import { incrementAsync, anotherAsyncThunk } from './apis/listBikes';

const initialState = {
  toggled: false,
  value: 0,
  status: 'idle',
  bikes: [],
  bikesByType: []
};

export const shopBikeDataSlice = createSlice({
  name: 'shopBikeData',
  initialState,
  reducers: {
    setToggled: (state) => {
      state.toggled = !state.toggled;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.bikes = action.payload;
        state.status = 'idle';
      })
      .addCase(anotherAsyncThunk.pending, (state, action) => {
        console.log('anotherAsyncThunk');
      })
      .addCase(anotherAsyncThunk.fulfilled, (state, action) => {
        state.bikes = action.payload;
      });
  }
});

export const { setToggled } = shopBikeDataSlice.actions;
export const selectToggled = (state) => state.shopBikeData.toggled;
export const selectBikes = (state) => state.shopBikeData.bikes;

export default shopBikeDataSlice.reducer;
