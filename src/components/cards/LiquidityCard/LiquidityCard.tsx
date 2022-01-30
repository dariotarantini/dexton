import './LiquidityCard.scss';
import ethIcon from '../../../assets/eth.png';
import swapIcon from '../../../assets/swap.svg';
import LiquidityDetailsModal from '../../modals/LiquidityDetailsModal/LiquidityDetailsModal';
import { useOpenModal } from '../../../store/features/modals/modalsSlice';
import { useAvailableTokens } from '../../../store/features/tokens/tokensSlice';

function LiquidityCard() {
  const openModal = useOpenModal();
  const tokens = useAvailableTokens();

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

      <button
        onClick={() => openModal(({ closeModal }) => (
          <LiquidityDetailsModal
            closeModal={closeModal}
            details={{
              from: {
                token: tokens.tokens[0],
              },
              to: {
                token: tokens.tokens[1],
              },
            }}
          />
        ))}
        className="liquidity-card__details-link"
      >
        Details
      </button>
    </div>
  );
}

export default LiquidityCard;
