import './PairChartCard.scss';
import { useState } from 'react';
import Card from '../../common/Card/Card';
import GradientChart from '../../common/Chart/GradientChart';
import { useSwap } from '../../../store/features/swap/swapSlice';
import { PriceAtTime, useRateStatistics } from '../../../store/features/tokens/tokensSlice';

interface PairChartCardHeadProps {
  period: string;
  setPeriod: (period: string) => void;
}

function PairChartCardHead({
  period,
  setPeriod,
}: PairChartCardHeadProps) {
  const {
    fromToken,
    toToken,
  } = useSwap();

  return (
    <div className="pair-chart-card__head">
      <div className="pair-chart-card__title">
        <img className="pair-chart-card__icon" src={fromToken?.icon} alt={fromToken?.symbol}/>
        <img className="pair-chart-card__icon" src={toToken?.icon} alt={toToken?.symbol}/>

        <span className="pair-chart-card__pair">
          {fromToken?.symbol}
          {' '}
          /
          {' '}
          {toToken?.symbol}
        </span>
      </div>
      <div className="pair-chart-card__days">
        <button
          onClick={() => setPeriod('price_24h')}
          type="button"
          className={['pair-chart-card__day', period === 'price_24h' ? 'active' : ''].join(' ')}
        >
          1D
        </button>
        <button
          onClick={() => setPeriod('price_1w')}
          type="button"
          className={['pair-chart-card__day', period === 'price_1w' ? 'active' : ''].join(' ')}
        >
          1W
        </button>
        <button
          onClick={() => setPeriod('price_1m')}
          type="button"
          className={['pair-chart-card__day', period === 'price_1m' ? 'active' : ''].join(' ')}
        >
          1M
        </button>
        <button
          onClick={() => setPeriod('price_1y')}
          type="button"
          className={['pair-chart-card__day', period === 'price_1y' ? 'active' : ''].join(' ')}
        >
          1Y
        </button>
      </div>
    </div>
  );
}

function PairChartCard() {
  const {
    fromToken,
    toToken,
  } = useSwap();

  const rateStatistics = useRateStatistics(fromToken, toToken);

  const [period, setPeriod] = useState<string>('price_24h');

  // @ts-ignore
  const prices = rateStatistics[period] as PriceAtTime[];

  return (
    <Card
      className="pair-chart-card"
      head={<PairChartCardHead period={period} setPeriod={setPeriod}/>}
    >
      <div className="pair-chart-card__subhead">
        <div className="pair-chart-card__price">{rateStatistics.current_price}</div>
        <div
          className={['pair-chart-card__percent', rateStatistics.increase > 0 ? 'increase' : 'decrease'].join(' ')}
        >
          {rateStatistics.increase > 0 ? '+' : ''}
          {rateStatistics.increase}
          {' '}
          (
          {rateStatistics.increase > 0 ? '+' : ''}
          {rateStatistics.increase_percentage}
          %
          )
        </div>
      </div>
      <div className="pair-chart-card__chart">
        <GradientChart
          color={rateStatistics.increase > 0 ? 'green' : 'red'}
          date={period !== 'price_24h'}
          scalesX
          items={prices}
          width={481}
          height={208}
        />
      </div>
    </Card>
  );
}

export default PairChartCard;
