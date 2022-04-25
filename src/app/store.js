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
        ignoredActions: [
          // 'salesData/updateVal',
          // 'salesData/updateValSelect',
          // 'salesData/updateImage'
        ]
      }
    })
});

setupListeners(store.dispatch);
