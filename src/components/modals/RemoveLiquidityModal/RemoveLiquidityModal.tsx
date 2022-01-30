import Modal from '../../common/Modal/Modal';
import './RemoveLiquidityModal.scss';
import { CloseModal } from '../../../store/features/modals/modalsSlice';
import { LiquidityDetails } from '../../../store/features/types';

interface RemoveLiquidityModalProps {
  closeModal: CloseModal;
  details: LiquidityDetails;
}

function RemoveLiquidityModal({
  closeModal,
  details,
}: RemoveLiquidityModalProps) {
  return (
    <Modal modalClassName="remove-liquidity-modal" closeModal={closeModal}>
      test
    </Modal>
  );
}

export default RemoveLiquidityModal;
