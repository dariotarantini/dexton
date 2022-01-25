import './PairCard.scss';
import GradientChart from '../Chart/GradientChart';
import { Token } from '../../features/types';
import { useRateStatistics } from '../../features/tokens/tokensSlice';
import { useSwap } from '../../features/swap/swapSlice';

export const exchangeChart = [
  {
    x: 1640044800,
    y: 2.3666628587737857,
  }, {
    x: 1640131200,
    y: 2.3906733266079807,
  }, {
    x: 1640217600,
    y: 3.50597979915627,
  }, {
    x: 1640304000,
    y: 4.13223282012826,
  }, {
    x: 1640390400,
    y: 4.348148169835569,
  }, {
    x: 1640476800,
    y: 4.431439166781765,
  }, {
    x: 1640563200,
    y: 3.8801487470133895,
  }, {
    x: 1640649600,
    y: 3.873599159470174,
  }, {
    x: 1640736000,
    y: 3.848094538240778,
  }, {
    x: 1640822400,
    y: 3.7829246614056804,
  }, {
    x: 1640908800,
    y: 3.689844559190126,
  }, {
    x: 1640995200,
    y: 3.797867775978532,
  }, {
    x: 1641081600,
    y: 3.488947547477612,
  }, {
    x: 1641168000,
    y: 3.3887256363555296,
  }, {
    x: 1641254400,
    y: 3.459638470046564,
  }, {
    x: 1641340800,
    y: 3.3422354608067035,
  }, {
    x: 1641427200,
    y: 3.5049662236252175,
  }, {
    x: 1641513600,
    y: 3.1228818011033868,
  }, {
    x: 1641600000,
    y: 2.8388015670099853,
  }, {
    x: 1641686400,
    y: 2.769355415033362,
  }, {
    x: 1641772800,
    y: 2.681114242446737,
  }, {
    x: 1641859200,
    y: 2.939714584962455,
  }, {
    x: 1641945600,
    y: 3.542300365111115,
  }, {
    x: 1642032000,
    y: 3.679249874792876,
  }, {
    x: 1642118400,
    y: 3.7047566618033776,
  }, {
    x: 1642204800,
    y: 3.591297760660364,
  }, {
    x: 1642291200,
    y: 3.5508794146445055,
  }, {
    x: 1642377600,
    y: 3.275329784931865,
  }, {
    x: 1642464000,
    y: 3.2501410760932727,
  }, {
    x: 1642550400,
    y: 3.2197706046205754,
  },
];

interface PairCardProps {
  fromToken: Token;
  toToken: Token;
}

function PairCard({
  fromToken,
  toToken,
}: PairCardProps) {
  const rateStatistics = useRateStatistics(fromToken, toToken);

  const {
    setToToken,
    setFromToken,
  } = useSwap();

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      role="button"
      className="PairCard"
      onClick={() => {
        setFromToken(fromToken);
        setToToken(toToken);
      }}
    >
      <div className="PairCard-left">
        <div className="PairCard-name">
          {fromToken.symbol}
          /
          {toToken.symbol}
        </div>
        <div className="PairCard-price">
          {rateStatistics.current_price}
        </div>
      </div>
      <div className="PairCard-right">
        <div
          className={['PairCard-percent', rateStatistics.increase > 0 ? 'increase' : 'decrease'].join(' ')}
        >
          {rateStatistics.increase_percentage}
          %
        </div>
        <div className="PairCard-chart">
          <GradientChart
            color={rateStatistics.increase > 0 ? 'green' : 'red'}
            items={rateStatistics.price_24h}
            width={75}
            height={25}
          />
        </div>
      </div>
    </div>
  );
}

export default PairCard;
