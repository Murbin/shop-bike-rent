import { createSlice } from '@reduxjs/toolkit';
import incrementAsync from './apis/listBikes';

const initialState = {
  toggled: false,
  value: 0,
  status: 'idle',
  bikes: []
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
        console.log('incrementAsync');
        state.bikes = action.payload;
        state.status = 'idle';
      });
  }
});

export const { setToggled } = shopBikeDataSlice.actions;
export const selectToggled = (state) => state.shopBikeData.toggled;
export const selectBikes = (state) => state.shopBikeData.bikes;

export default shopBikeDataSlice.reducer;
