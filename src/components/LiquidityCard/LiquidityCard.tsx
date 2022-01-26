import './LiquidityCard.scss';
import ethIcon from '../../assets/eth.png';
import swapIcon from '../../assets/swap.svg';

function LiquidityCard() {
  return (
    <div className="LiquidityCard">
      <div className="LiquidityCard-pair">
        <div className="LiquidityCard-pair__icons">
          <img src={ethIcon} alt="ETH"/>
          <img src={ethIcon} alt="ETH"/>
        </div>

        <div className="LiquidityCard-pair__names">
          ETH/TON
        </div>
      </div>

      <div className="LiquidityCard-tags">
        <div className="LiquidityCard-tag">0.5%</div>
        <div className="LiquidityCard-tag LiquidityCard-tag--green">Active</div>
      </div>

      <div className="LiquidityCard-swap">
        <div className="LiquidityCard-swap_item">
          <span className="LiquidityCard-swap_item__label">
            Min:
          </span>
          <span className="LiquidityCard-swap_item__amount">
            1,420.27 ETH
          </span>
          <span className="LiquidityCard-swap_item__per">
            per
          </span>
          <span className="LiquidityCard-swap_item__currency">
            TON
          </span>
        </div>

        <div className="LiquidityCard-swap-icon">
          <img src={swapIcon} alt="swap"/>
        </div>

        <div className="LiquidityCard-swap_item">
          <span className="LiquidityCard-swap_item__label">
            Max:
          </span>
          <span className="LiquidityCard-swap_item__amount">
            1,420.27 ETH
          </span>
          <span className="LiquidityCard-swap_item__per">
            per
          </span>
          <span className="LiquidityCard-swap_item__currency">
            TON
          </span>
        </div>
      </div>

      <a className="LiquidityCard-details__link" href="/liquidity">Details</a>
    </div>
  );
}

export default LiquidityCard;
