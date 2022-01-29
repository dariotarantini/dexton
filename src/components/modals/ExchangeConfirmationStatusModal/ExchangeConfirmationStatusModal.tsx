import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { CloseModal } from '../../../store/features/modals/modalsSlice';
import { Token } from '../../../store/features/types';
import Modal from '../../common/Modal/Modal';
import waitJson from '../../../assets/DUCK4_THINK_OUT.json';
import okJson from '../../../assets/DUCK13_LIKE_OUT.json';
import Button from '../../common/Button/Button';
import './ExchangeConfirmationStatusModal.scss';

interface ExchangeConfirmationStatusModalProps {
  closeModal: CloseModal;
  closeConfirmModal: CloseModal;
  fromToken: Token,
  toToken: Token,
  amount: number,
  minReceived: number,
}

function ExchangeConfirmationStatusModal({
  closeModal,
  closeConfirmModal,
  fromToken,
  toToken,
  amount,
  minReceived,
}: ExchangeConfirmationStatusModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSubmitted(true);

      closeConfirmModal();
    }, 2000);
  }, []);

  return (
    <Modal
      closeModal={closeModal}
      modalClassName={['exchange-confirmation-status-modal', isSubmitted ? 'confirmed' : ''].join(' ')}
    >
      <div
        key={String(isSubmitted)}
        className="exchange-confirmation-status-modal__art"
      >
        <Lottie
          loop
          autoplay
          style={{
            maxWidth: 142,
            maxHeight: 142,
          }}
          animationData={isSubmitted ? okJson : waitJson}
        />
      </div>

      <h2
        className="exchange-confirmation-status-modal__title"
      >
        {isSubmitted ? 'Transaction Submitted' : 'Confirmation...'}
      </h2>
      {
        !isSubmitted
        && (
          <h4 className="exchange-confirmation-status-modal__subtitle">
            Swapping
            {' '}
            {amount}
            {' '}
            {fromToken.symbol}
            {' '}
            for
            {' '}
            {minReceived}
            {' '}
            {toToken.symbol}
          </h4>
        )
      }
      <div
        className="exchange-confirmation-status-modal__info"
      >
        {isSubmitted ? 'When the payment status changes, you will receive notifications' : 'Wait for confirm in Metamask'}
      </div>
      {
        isSubmitted
        && <Button full form outline>View on Explorer</Button>
      }
    </Modal>
  );
}

export default ExchangeConfirmationStatusModal;
