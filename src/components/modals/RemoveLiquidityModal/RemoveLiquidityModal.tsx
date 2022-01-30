import Modal from '../../common/Modal/Modal';
import './RemoveLiquidityModal.scss';
import { CloseModal } from '../../../store/features/modals/modalsSlice';
import { LiquidityDetails } from '../../../store/features/types';
import TokenAmountInput from '../../common/TokenAmountInput/TokenAmountInput';
import Button from '../../common/Button/Button';

interface RemoveLiquidityModalProps {
  closeModal: CloseModal;
  details: LiquidityDetails;
}

function RemoveLiquidityModal({
  closeModal,
  details,
}: RemoveLiquidityModalProps) {
  return (
    <Modal title="Remove Liquidity" modalClassName="remove-liquidity-modal" closeModal={closeModal}>
      <TokenAmountInput token={details.from.token}/>
      <TokenAmountInput token={details.to.token}/>

      <div className="modal-items modal-items--summary">
        <div className="modal-item">
          <div className="modal-item__name">
            TON per ETH
          </div>

          <div className="modal-item__value">
            756
          </div>
        </div>
        <div className="modal-item">
          <div className="modal-item__name">
            ETH per TON
          </div>

          <div className="modal-item__value">
            0.00014
          </div>
        </div>
        <div className="modal-item">
          <div className="modal-item__name">
            New Share of Pool
          </div>

          <div className="modal-item__value">
            0.012548%
          </div>
        </div>
      </div>

      <Button disabled form full>
        Remove Liquidity
      </Button>
    </Modal>
  );
}

export default RemoveLiquidityModal;
