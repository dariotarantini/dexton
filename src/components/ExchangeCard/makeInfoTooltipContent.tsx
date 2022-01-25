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
    <div className="ExchangeCard-tooltip_content">
      <div className="ExchangeCard-tooltip_content-item">
        <span
          className="ExchangeCard-tooltip_content-item-name"
        >
          Minimum received
        </span>
        <span
          className="ExchangeCard-tooltip_content-item-value"
        >
          {minReceived}
          {' '}
          {toToken?.symbol}
        </span>
      </div>
      <div className="ExchangeCard-tooltip_content-item">
        <span
          className="ExchangeCard-tooltip_content-item-name"
        >
          Price Impact
        </span>
        <span className="ExchangeCard-tooltip_content-item-value">
          {priceImpact}
          %
        </span>
      </div>
      <div className="ExchangeCard-tooltip_content-item">
        <span className="ExchangeCard-tooltip_content-item-name">Liquidity Provider Fee</span>
        <span className="ExchangeCard-tooltip_content-item-value">
          {liquidityProviderFee}
          {' '}
          {fromToken?.symbol}
        </span>
      </div>
    </div>
  );
}

export default makeInfoTooltipContent;
