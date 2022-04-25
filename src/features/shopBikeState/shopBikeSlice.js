import { createSlice } from '@reduxjs/toolkit';
import { incrementAsync, anotherAsyncThunk } from './apis/listBikes';

const initialState = {
  toggled: false,
  value: 0,
  status: 'idle',
  bikes: [],
  bikesByType: [],
  //rent
  username: '',
  stepsCompleted: {
    username: true,
    email: false,
    address: false,
    floor: false,
    zone: false,
    has: false,
    price: false,
    image: false,
    hasElevator: false
  }
};

export const shopBikeDataSlice = createSlice({
  name: 'shopBikeData',
  initialState,
  reducers: {
    setToggled: (state) => {
      state.toggled = !state.toggled;
    },
    //rent data
    stepCompleted(state, { payload: { stepsCompleted, name } }) {
      state[stepsCompleted][name] = true;
    },
    updateValueInput(state, { payload: { key, val, child } }) {
      if (child) {
        state[key][child] = val.target.checked;
      } else {
        state[key] = val.target.value;
      }
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

export const { setToggled, updateValueInput, stepCompleted } =
  shopBikeDataSlice.actions;

export const selectToggled = (state) => state.shopBikeData.toggled;
export const selectBikes = (state) => state.shopBikeData.bikes;
//Rent
export const selectName = (state) => state.shopBikeData.username;
export const selectStepsCompleted = (state) =>
  state.shopBikeData.stepsCompleted;
export const selectResume = (state) => state.shopBikeData;

export default shopBikeDataSlice.reducer;
