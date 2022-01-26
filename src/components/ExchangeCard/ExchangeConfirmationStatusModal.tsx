import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { CloseModal } from '../../features/modals/modalsSlice';
import { Token } from '../../features/types';
import Modal from '../Modal/Modal';
import duckThinkOutJson from '../../assets/DUCK4_THINK_OUT.json';
import duckLikeOutJson from '../../assets/DUCK13_LIKE_OUT.json';
import Button from '../Button/Button';

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
      modalClassName={['ExchangeConfirmationStatusModal', isSubmitted ? 'confirmed' : ''].join(' ')}
    >
      <div
        key={String(isSubmitted)}
        className="ExchangeConfirmationStatusModal-art"
      >
        <Lottie
          loop
          autoplay
          style={{
            maxWidth: 142,
            maxHeight: 142,
          }}
          animationData={isSubmitted ? duckLikeOutJson : duckThinkOutJson}
        />
      </div>

      <h2
        className="ExchangeConfirmationStatusModal-title"
      >
        {isSubmitted ? 'Transaction Submitted' : 'Confirmation...'}
      </h2>
      {
        !isSubmitted
        && (
          <h4 className="ExchangeConfirmationStatusModal-subtitle">
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
        className="ExchangeConfirmationStatusModal-info"
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
