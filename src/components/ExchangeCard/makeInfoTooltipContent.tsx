import React from 'react';
import { UseRate } from '../../features/tokens/tokensSlice';

function makeInfoTooltipContent({
  minReceived,
  fromToken,
  toToken,
  priceImpact,
  liquidityProviderFee,
}: UseRate) {
  return (
    <div className="ExchangeCard-tooltip__content">
      <div className="ExchangeCard-tooltip__content-item">
        <span
          className="ExchangeCard-tooltip__content-item__name"
        >
          Minimum received
        </span>
        <span
          className="ExchangeCard-tooltip__content-item__value"
        >
          {minReceived}
          {' '}
          {toToken?.symbol}
        </span>
      </div>
      <div className="ExchangeCard-tooltip__content-item">
        <span
          className="ExchangeCard-tooltip__content-item__name"
        >
          Price Impact
        </span>
        <span className="ExchangeCard-tooltip__content-item__value">
          {priceImpact}
          %
        </span>
      </div>
      <div className="ExchangeCard-tooltip__content-item">
        <span className="ExchangeCard-tooltip__content-item__name">Liquidity Provider Fee</span>
        <span className="ExchangeCard-tooltip__content-item__value">
          {liquidityProviderFee}
          {' '}
          {fromToken?.symbol}
        </span>
      </div>
    </div>
  );
}

export default makeInfoTooltipContent;
