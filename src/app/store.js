import { configureStore } from '@reduxjs/toolkit';
import shopBikeReducer from '../features/shopBikeState/shopBikeSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    shopBikeData: shopBikeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['shopBikeData/updateValueInput']
      }
    })
});

setupListeners(store.dispatch);
