export interface Token {
  name: string;
  symbol: string;
  icon: string;
  address: string;
}

export interface Wallet {
  balance: number;
  address: string;
}

export interface Rate {
  price: number;
  reversePrice: number;
}

export interface LiquidityDetails {
  from: { token: Token };
  to: { token: Token };
}
