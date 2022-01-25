import './PairChartCard.scss';
import { useState } from 'react';
import Card from '../Card/Card';
import GradientChart from '../Chart/GradientChart';
import { useSwap } from '../../features/swap/swapSlice';
import { PriceAtTime, useRateStatistics } from '../../features/tokens/tokensSlice';

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
    <div className="PairChartCard-head">
      <div className="PairChartCard-title">
        <img className="PairChartCard-icon" src={fromToken?.icon} alt={fromToken?.symbol}/>
        <img className="PairChartCard-icon" src={toToken?.icon} alt={toToken?.symbol}/>

        <span className="PairChartCard-pair">
          {fromToken?.symbol}
          {' '}
          /
          {' '}
          {toToken?.symbol}
        </span>
      </div>
      <div className="PairChartCard-days">
        <button
          onClick={() => setPeriod('price_24h')}
          type="button"
          className={['PairChartCard-day', period === 'price_24h' ? 'active' : ''].join(' ')}
        >
          1D
        </button>
        <button
          onClick={() => setPeriod('price_1w')}
          type="button"
          className={['PairChartCard-day', period === 'price_1w' ? 'active' : ''].join(' ')}
        >
          1W
        </button>
        <button
          onClick={() => setPeriod('price_1m')}
          type="button"
          className={['PairChartCard-day', period === 'price_1m' ? 'active' : ''].join(' ')}
        >
          1M
        </button>
        <button
          onClick={() => setPeriod('price_1y')}
          type="button"
          className={['PairChartCard-day', period === 'price_1y' ? 'active' : ''].join(' ')}
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
      className="PairChartCard"
      head={<PairChartCardHead period={period} setPeriod={setPeriod}/>}
    >
      <div className="PairChartCard-subhead">
        <div className="PairChartCard-price">{rateStatistics.current_price}</div>
        <div
          className={['PairChartCard-percent', rateStatistics.increase > 0 ? 'increase' : 'decrease'].join(' ')}
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
      <div className="PairChartCard-chart">
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
