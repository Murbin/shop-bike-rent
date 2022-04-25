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
  type: undefined,
  days: undefined,
  amountRent: undefined,
  name: undefined,
  points: undefined,
  image: undefined,
  stepsCompleted: {
    username: true,
    type: false,
    days: false,
    amountRent: false,
    image: false
  },
  history: []
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
      console.log('action ', state[stepsCompleted][name]);
      state[stepsCompleted][name] = true;
    },
    updateValueInput(state, { payload: { key, val, child } }) {
      if (child) {
        state[key][child] = val.target.checked;
      } else {
        state[key] = val.target.value;
      }
    },
    updateImage(state, { payload: { key, val } }) {
      state[key] = val;
    },
    updateAmount(state, { payload: { key, val, name } }) {
      const daysSelected = Number(state.days);
      const priceBase = parseFloat(val);
      switch (state.type) {
        case 'electrics':
          state.amountRent = daysSelected * priceBase;
          state.points = 2;
          break;
        case 'old':
          if (daysSelected <= 5) {
            state.amountRent = priceBase;
          } else {
            const daysAfterFiveDays = daysSelected - 5;
            state.amountRent = daysAfterFiveDays * priceBase + priceBase;
          }
          state.points = 1;
          break;
        case 'normal':
          if (daysSelected <= 3) {
            state.amountRent = priceBase;
          } else {
            const daysAfterThreeDays = daysSelected - 3;
            state.amountRent = daysAfterThreeDays * priceBase + priceBase;
          }
          state.points = 1;
          break;
        default:
          break;
      }
      state.name = name;
    },
    updateHistory(state) {
      state.history.push({
        days: Number(state.days),
        type: state.type,
        username: state.username,
        amountRent: state.amountRent,
        name: state.name,
        points: state.points
      });
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
        state.status = 'loading';
      })
      .addCase(anotherAsyncThunk.fulfilled, (state, action) => {
        state.bikes = action.payload;
      });
  }
});

export const {
  setToggled,
  updateValueInput,
  updateImage,
  updateAmount,
  updateHistory,
  stepCompleted
} = shopBikeDataSlice.actions;

export const selectToggled = (state) => state.shopBikeData.toggled;
export const selectBikes = (state) => state.shopBikeData.bikes;
//Rent
export const selectName = (state) => state.shopBikeData.username;
export const selectType = (state) => state.shopBikeData.type;
export const selectDaysRent = (state) => state.shopBikeData.days;
export const selectStepsCompleted = (state) =>
  state.shopBikeData.stepsCompleted;
export const selectResume = (state) => state.shopBikeData;
export const selectImage = (state) => state.shopBikeData.image;
export const selectAmountRent = (state) => state.shopBikeData.amountRent;
export const selectHistory = (state) => state.shopBikeData.history;

export default shopBikeDataSlice.reducer;
