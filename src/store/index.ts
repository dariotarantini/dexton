import { configureStore } from '@reduxjs/toolkit';
import tokensSlice from './features/tokens/tokensSlice';
import modalsSlice from './features/modals/modalsSlice';
import walletSlice from './features/wallet/walletSlice';
import swapSlice from './features/swap/swapSlice';

export const store = configureStore({
  reducer: {
    tokens: tokensSlice,
    modals: modalsSlice,
    wallet: walletSlice,
    swap: swapSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
