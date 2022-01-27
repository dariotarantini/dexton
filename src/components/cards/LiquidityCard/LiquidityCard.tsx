import './LiquidityCard.scss';
import ethIcon from '../../../assets/eth.png';
import swapIcon from '../../../assets/swap.svg';

function LiquidityCard() {
  return (
    <div className="liquidity-card">
      <div className="liquidity-card__pair">
        <div className="liquidity-card__pair__icons">
          <img src={ethIcon} alt="ETH"/>
          <img src={ethIcon} alt="ETH"/>
        </div>

        <div className="liquidity-card__pair__names">
          ETH/TON
        </div>
      </div>

      <div className="liquidity-card__tags">
        <div className="liquidity-card__tag">0.5%</div>
        <div className="liquidity-card__tag liquidity-card-tag--green">Active</div>
      </div>

      <div className="liquidity-card__swap">
        <div className="liquidity-card__swap-item">
          <span className="liquidity-card__swap-item__label">
            Min:
          </span>
          <span className="liquidity-card__swap-item__amount">
            1,420.27 ETH
          </span>
          <span className="liquidity-card__swap-item__per">
            per
          </span>
          <span className="liquidity-card__swap-item__currency">
            TON
          </span>
        </div>

        <div className="liquidity-card__swap-icon">
          <img src={swapIcon} alt="swap"/>
        </div>

        <div className="liquidity-card__swap-item">
          <span className="liquidity-card__swap-item__label">
            Max:
          </span>
          <span className="liquidity-card__swap-item__amount">
            1,420.27 ETH
          </span>
          <span className="liquidity-card__swap-item__per">
            per
          </span>
          <span className="liquidity-card__swap-item__currency">
            TON
          </span>
        </div>
      </div>

      <a className="liquidity-card__details-link" href="/liquidity">Details</a>
    </div>
  );
}

export default LiquidityCard;
