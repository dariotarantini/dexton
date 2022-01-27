import React from 'react';
import { UseRate } from '../../../store/features/tokens/tokensSlice';

function makeInfoTooltipContent({
  minReceived,
  fromToken,
  toToken,
  priceImpact,
  liquidityProviderFee,
}: UseRate) {
  return (
    <div className="exchange-card__tooltip__content">
      <div className="exchange-card__tooltip__content__item">
        <span
          className="exchange-card__tooltip__content__item__name"
        >
          Minimum received
        </span>
        <span
          className="exchange-card__tooltip__content__item__value"
        >
          {minReceived}
          {' '}
          {toToken?.symbol}
        </span>
      </div>
      <div className="exchange-card__tooltip__content__item">
        <span
          className="exchange-card__tooltip__content__item__name"
        >
          Price Impact
        </span>
        <span className="exchange-card__tooltip__content__item__value">
          {priceImpact}
          %
        </span>
      </div>
      <div className="exchange-card__tooltip__content__item">
        <span className="exchange-card__tooltip__content__item__name">Liquidity Provider Fee</span>
        <span className="exchange-card__tooltip__content__item__value">
          {liquidityProviderFee}
          {' '}
          {fromToken?.symbol}
        </span>
      </div>
    </div>
  );
}

export default makeInfoTooltipContent;
