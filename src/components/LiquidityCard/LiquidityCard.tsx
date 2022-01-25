import './LiquidityCard.scss';
import ethIcon from '../../assets/eth.png';
import swapIcon from '../../assets/swap.svg';

function LiquidityCard() {
  return (
    <div className="LiquidityCard">
      <div className="LiquidityCard-pair">
        <div className="LiquidityCard-pair-icons">
          <img src={ethIcon} alt="ETH"/>
          <img src={ethIcon} alt="ETH"/>
        </div>

        <div className="LiquidityCard-pair-names">
          ETH/TON
        </div>
      </div>

      <div className="LiquidityCard-tags">
        <div className="LiquidityCard-tag">0.5%</div>
        <div className="LiquidityCard-tag green">Active</div>
      </div>

      <div className="LiquidityCard-swap">
        <div className="LiquidityCard-swap-item">
          <span className="LiquidityCard-swap-item-label">
            Min:
          </span>
          <span className="LiquidityCard-swap-item-amount">
            1,420.27 ETH
          </span>
          <span className="LiquidityCard-swap-item-per">
            per
          </span>
          <span className="LiquidityCard-swap-item-currency">
            TON
          </span>
        </div>

        <div className="LiquidityCard-swap-icon">
          <img src={swapIcon} alt="swap"/>
        </div>

        <div className="LiquidityCard-swap-item">
          <span className="LiquidityCard-swap-item-label">
            Max:
          </span>
          <span className="LiquidityCard-swap-item-amount">
            1,420.27 ETH
          </span>
          <span className="LiquidityCard-swap-item-per">
            per
          </span>
          <span className="LiquidityCard-swap-item-currency">
            TON
          </span>
        </div>
      </div>

      <a className="LiquidityCard-details-link" href="/liquidity">Details</a>
    </div>
  );
}

export default LiquidityCard;
