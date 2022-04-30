import { createSlice } from '@reduxjs/toolkit';
import { getAllBicycles, getBicyclesByType } from './apis/listBicycles';

const initialState = {
  toggled: false,
  value: 0,
  status: 'idle',
  bicycles: [],
  bicyclesByType: [],
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

export const shopBicycleDataSlice = createSlice({
  name: 'shopBicycleData',
  initialState,
  reducers: {
    setToggled: (state) => {
      state.toggled = !state.toggled;
    },
    stepCompleted(state, { payload: { stepsCompleted, name } }) {
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
      .addCase(getAllBicycles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllBicycles.fulfilled, (state, action) => {
        state.bicycles = action.payload;
        state.status = 'idle';
      })
      .addCase(getBicyclesByType.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getBicyclesByType.fulfilled, (state, action) => {
        state.bicycles = action.payload;
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
} = shopBicycleDataSlice.actions;

export const selectToggled = (state) => state.shopBicycleData.toggled;
export const selectBicycles = (state) => state.shopBicycleData.bicycles;
export const selectName = (state) => state.shopBicycleData.username;
export const selectType = (state) => state.shopBicycleData.type;
export const selectDaysRent = (state) => state.shopBicycleData.days;
export const selectStepsCompleted = (state) =>
  state.shopBicycleData.stepsCompleted;
export const selectResume = (state) => state.shopBicycleData;
export const selectImage = (state) => state.shopBicycleData.image;
export const selectAmountRent = (state) => state.shopBicycleData.amountRent;
export const selectHistory = (state) => state.shopBicycleData.history;

export default shopBicycleDataSlice.reducer;
