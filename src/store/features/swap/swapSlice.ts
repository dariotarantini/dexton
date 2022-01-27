import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Token } from '../types';
import { RootState } from '../../index';
import ethIcon from '../../../assets/eth.png';
import toncoinIcon from '../../../assets/tonconin.svg';

interface SwapState {
  fromToken: Token | null;
  toToken: Token | null;
}

const initialState: SwapState = {
  fromToken: null,
  toToken: null,
};

const swapSlice = createSlice({
  name: 'swap',
  initialState,
  reducers: {
    setFromToken: (state, action: PayloadAction<Token | null>) => {
      state.fromToken = action.payload;
    },
    setToToken: (state, action: PayloadAction<Token | null>) => {
      state.toToken = action.payload;
    },
  },
});

const {
  setFromToken,
  setToToken,
} = swapSlice.actions;

export function useSwap() {
  const fromToken = useSelector((state: RootState) => state.swap.fromToken);
  const toToken = useSelector((state: RootState) => state.swap.toToken);
  const dispatch = useDispatch();

  return {
    fromToken,
    toToken,
    setFromToken: (token: Token | null) => dispatch(setFromToken(token)),
    setToToken: (token: Token | null) => dispatch(setToToken(token)),
  };
}

type UsePopularSwaps = {
  fromToken: Token;
  toToken: Token;
}[];

export function usePopularSwaps(): UsePopularSwaps {
  return [
    {
      fromToken: {
        symbol: 'TON',
        name: 'Toncoin',
        icon: ethIcon,
        address: '0x000111222333',
      },
      toToken: {
        symbol: 'ETH',
        name: 'Ether',
        icon: toncoinIcon,
        address: '0x000111222333',
      },
    },
    {
      fromToken: {
        symbol: 'TON',
        name: 'Toncoin',
        icon: ethIcon,
        address: '0x000111222333',
      },
      toToken: {
        symbol: 'TUSD',
        name: 'Dollar token',
        icon: toncoinIcon,
        address: '0x000111222333',
      },
    },
    {
      fromToken: {
        symbol: 'TON',
        name: 'Toncoin',
        icon: ethIcon,
        address: '0x000111222333',
      },
      toToken: {
        symbol: 'TUAH',
        name: 'Hryvna token',
        icon: toncoinIcon,
        address: '0x000111222333',
      },
    },
    {
      fromToken: {
        symbol: 'TON',
        name: 'Toncoin',
        icon: ethIcon,
        address: '0x000111222333',
      },
      toToken: {
        symbol: 'TRUB',
        name: 'Ruble token',
        icon: toncoinIcon,
        address: '0x000111222333',
      },
    },
  ];
}

export default swapSlice.reducer;
