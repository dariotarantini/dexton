import Modal from '../../common/Modal/Modal';
import './AddLiquidityModal.scss';
import { CloseModal } from '../../../store/features/modals/modalsSlice';
import TokenAmountInput from '../../common/TokenAmountInput/TokenAmountInput';
import { LiquidityDetails } from '../../../store/features/types';
import { LiquidityDetailsItems } from '../LiquidityDetailsModal/LiquidityDetailsModal';
import Button from '../../common/Button/Button';

interface AddLiquidityModalProps {
  closeModal: CloseModal;
  details: LiquidityDetails;
}

function AddLiquidityModal({
  closeModal,
  details,
}: AddLiquidityModalProps) {
  return (
    <Modal closeModal={closeModal} title="Add Liquidity" modalClassName="add-liquidity-modal">
      <LiquidityDetailsItems details={details}/>

      <div className="add-liquidity-modal__block-title">
        Deposit Amounts
      </div>

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
        Add Liquidity
      </Button>
    </Modal>
  );
}

export default AddLiquidityModal;
