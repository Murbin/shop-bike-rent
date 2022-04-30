import { configureStore } from '@reduxjs/toolkit';
import shopBicycleReducer from '../features/shopBicycleState/shopBicycleSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    shopBicycleData: shopBicycleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['shopBicycleData/updateValueInput']
      }
    })
});

setupListeners(store.dispatch);
