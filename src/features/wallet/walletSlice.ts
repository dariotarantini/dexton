import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Token, Wallet } from '../types';
import { RootState } from '../../store';

export interface WalletState {
  wallet: Wallet | null;
}

const initialState: WalletState = {
  wallet: null,
};

const connectWalletThunk = createAsyncThunk('wallet/connect', async (): Promise<Wallet> => ({
  balance: 10,
  address: '0xKJfkdsjkjDFjdfhdsugyuAJH',
}));

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(connectWalletThunk.fulfilled, (state, action) => {
      state.wallet = action.payload;
    });
  },
});

interface UseWallet {
  wallet: Wallet | null;
  isWalletConnected: boolean;
  connectWallet: () => void;
}

export function useWallet(): UseWallet {
  const dispatch = useDispatch();
  const wallet = useSelector((state: RootState) => state.wallet.wallet);

  const isWalletConnected = wallet != null;

  const connectWallet = () => dispatch(connectWalletThunk());

  return {
    wallet,
    isWalletConnected,
    connectWallet,
  };
}

interface UseTokenBalance {
  balance: number;
  isLoading: boolean;
}

export function useTokenBalance(token: Token | null): UseTokenBalance {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(Math.round(Math.random() * 1000));
  }, [token]);

  return {
    balance,
    isLoading: false,
  };
}

export default walletSlice.reducer;
