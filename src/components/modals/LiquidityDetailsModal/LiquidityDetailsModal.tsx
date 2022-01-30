import Modal from '../../common/Modal/Modal';
import { CloseModal, useOpenModal } from '../../../store/features/modals/modalsSlice';
import { LiquidityDetails } from '../../../store/features/types';
import Tokico from '../Tokico/Tokico';
import Tag from '../../common/Tag/Tag';
import './LiquidityDetailsModal.scss';
import Button from '../../common/Button/Button';
import AddLiquidityModal from '../AddLiquidityModal/AddLiquidityModal';
import RemoveLiquidityModal from '../RemoveLiquidityModal/RemoveLiquidityModal';

export function LiquidityDetailsItems({ details }: { details: LiquidityDetails }) {
  return (
    <div className="modal-items">
      <div className="modal-item">
        <div className="modal-item__name">
          Pooled ETH
        </div>

        <div className="modal-item__value">
          0.1254685
        </div>
      </div>
      <div className="modal-item">
        <div className="modal-item__name">
          Pooled TON
        </div>

        <div className="modal-item__value">
          756
        </div>
      </div>
      <div className="modal-item">
        <div className="modal-item__name">
          Share of Pool
        </div>

        <div className="modal-item__value">
          17.48755412%
        </div>
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.8328 10.8333H8.97417L12.8258 6.99813C13.0455 6.77862 13.169 6.48091 13.169 6.17048C13.169 5.86005 13.0455 5.56233 12.8258 5.34282C12.606 5.12332 12.3079 5 11.9971 5C11.6863 5 11.3882 5.12332 11.1684 5.34282L5.33265 11.1714C5.2264 11.2822 5.1431 11.4129 5.08755 11.556C4.97082 11.8398 4.97082 12.1582 5.08755 12.442C5.1431 12.5851 5.2264 12.7158 5.33265 12.8267L11.1684 18.6552C11.2769 18.7644 11.406 18.8512 11.5482 18.9103C11.6905 18.9695 11.843 19 11.9971 19C12.1512 19 12.3037 18.9695 12.446 18.9103C12.5882 18.8512 12.7173 18.7644 12.8258 18.6552C12.9352 18.5468 13.022 18.4179 13.0812 18.2758C13.1405 18.1338 13.171 17.9814 13.171 17.8275C13.171 17.6736 13.1405 17.5213 13.0812 17.3792C13.022 17.2372 12.9352 17.1083 12.8258 16.9999L8.97417 13.1647H17.8328C18.1424 13.1647 18.4393 13.0419 18.6581 12.8233C18.877 12.6047 19 12.3082 19 11.999C19 11.6898 18.877 11.3933 18.6581 11.1747C18.4393 10.9561 18.1424 10.8333 17.8328 10.8333Z"
        fill="#0088CC"
      />
    </svg>
  );
}

function LiquidityDetailsModalTitle({ details }: { details: LiquidityDetails; }) {
  return (
    <div className="liquidity-details-modal__title">
      <Tokico
        fromToken={details.from.token}
        toToken={details.to.token}
      />

      <Tag color="blue">
        0.5%
      </Tag>
      <Tag color="green">
        Active
      </Tag>
    </div>
  );
}

interface LiquidityDetailsModalProps {
  closeModal: CloseModal;
  details: LiquidityDetails;
}

function LiquidityDetailsModal({
  closeModal,
  details,
}: LiquidityDetailsModalProps) {
  const openModal = useOpenModal();

  return (
    <Modal
      title={<LiquidityDetailsModalTitle details={details}/>}
      modalClassName="liquidity-details-modal"
      closeModal={closeModal}
    >
      <LiquidityDetailsItems details={details}/>

      <footer className="modal__footer">
        <Button
          onClick={() => openModal(({ closeModal: closeAddLiquidityModal }) => (
            <AddLiquidityModal
              details={details}
              closeModal={closeAddLiquidityModal}
            />
          ))}
          full
          form
        >
          Add
        </Button>
        <Button
          onClick={() => openModal(({ closeModal: closeRemoveLiquidityModal }) => (
            <RemoveLiquidityModal
              details={details}
              closeModal={closeRemoveLiquidityModal}
            />
          ))}
          full
          form
          outline
        >
          Remove
        </Button>
      </footer>
    </Modal>
  );
}

export default LiquidityDetailsModal;
