import { Token } from '../../../store/features/types';
import './Tokico.scss';

interface TokicoProps {
  fromToken: Token;
  toToken: Token;
}

function Tokico({
  fromToken,
  toToken,
}: TokicoProps) {
  return (
    <div className="tokico">
      <img src={fromToken.icon} alt={fromToken.symbol}/>
      <img src={toToken.icon} alt={toToken.symbol}/>

      {fromToken.symbol}
      {' '}
      /
      {' '}
      {toToken.symbol}
    </div>
  );
}

export default Tokico;
