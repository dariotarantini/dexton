import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../index';
import ethIcon from '../../../assets/eth.png';
import tonconinIcon from '../../../assets/tonconin.svg';
import { Rate, Token } from '../types';

function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface TokensState {
  items: Token[];
  isLoaded: boolean;
  isLoading: boolean;
}

const initialState: TokensState = {
  items: [],
  isLoaded: false,
  isLoading: false,
};

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setItemsAndFetched: (state, action: PayloadAction<Token[]>) => {
      state.items = action.payload;
      state.isLoaded = true;
      state.isLoading = false;
    },
    setIsFetching: (state) => {
      state.isLoading = true;
    },
  },
});

const {
  setItemsAndFetched,
  setIsFetching,
} = tokensSlice.actions;

export function useAvailableTokens() {
  const tokens = useSelector((state: RootState) => state.tokens.items);
  const isLoaded = useSelector((state: RootState) => state.tokens.isLoaded);
  const isLoading = useSelector((state: RootState) => state.tokens.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching());

    dispatch(
      setItemsAndFetched([
        {
          symbol: 'TON',
          name: 'Toncoin',
          icon: tonconinIcon,
          address: '',
        },
        {
          symbol: 'ETH',
          name: 'Ether',
          icon: ethIcon,
          address: '',
        },
        {
          symbol: 'TUSD',
          name: 'Dollar token',
          icon: ethIcon,
          address: '',
        },
        {
          symbol: 'TUAH',
          name: 'Hryvna token',
          icon: ethIcon,
          address: '',
        },
        {
          symbol: 'TRUB',
          name: 'Ruble token',
          icon: ethIcon,
          address: '',
        },
      ]),
    );
  }, [isLoaded]);

  return {
    tokens,
    isLoading,
  };
}

export async function getRate(): Promise<Rate> {
  return {
    price: Math.random(),
    reversePrice: Math.random() * 100,
  };
}

export interface UseRate {
  rate: Rate | null;
  fromToken: Token | null;
  toToken: Token | null;
  minReceived: number;
  priceImpact: number;
  liquidityProviderFee: number;
  isLoading: boolean;
}

export function useRate(fromToken: Token | null, toToken: Token | null, amount: number): UseRate {
  const [rate, setRate] = useState<Rate | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (fromToken && toToken) {
      setIsLoading(true);

      getRate()
        .then((newRate) => {
          setRate(newRate);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setRate(null);
    }
  }, [fromToken, toToken]);

  const minReceived = (rate?.price || 0) * amount;
  const priceImpact = Math.floor(Math.random() * 10) / 100;
  const liquidityProviderFee = Math.floor(Math.random() * 10) / 1000;

  return {
    rate,
    minReceived,
    priceImpact,
    liquidityProviderFee,
    isLoading,
    fromToken,
    toToken,
  };
}

export interface PriceAtTime {
  time: number;
  price: number;
}

interface UseRateStatistics {
  price_24h: PriceAtTime[];
  price_1w: PriceAtTime[];
  price_1m: PriceAtTime[];
  price_1y: PriceAtTime[];
  current_price: number;
  increase: number;
  increase_percentage: number;
  isLoading: boolean;
}

export function useRateStatistics(
  fromToken: Token | null,
  toToken: Token | null,
): UseRateStatistics {
  const increase = randomInteger(-100, 100);

  return {
    price_24h: new Array(24).fill(null)
      .map(() => ({
        price: randomInteger(0, 100),
        time: randomInteger(1540044800, 1640044800),
      })),
    price_1w: new Array(7).fill(null)
      .map(() => ({
        price: randomInteger(0, 100),
        time: randomInteger(1540044800, 1640044800),
      })),
    price_1m: new Array(30).fill(null)
      .map(() => ({
        price: randomInteger(0, 100),
        time: randomInteger(1540044800, 1640044800),
      })),
    price_1y: new Array(365).fill(null)
      .map(() => ({
        price: randomInteger(0, 100),
        time: randomInteger(1540044800, 1640044800),
      })),
    current_price: randomInteger(0, 1000),
    increase,
    increase_percentage: randomInteger(0, 10) * (increase >= 0 ? 1 : -1),
    isLoading: false,
  };
}

export default tokensSlice.reducer;
