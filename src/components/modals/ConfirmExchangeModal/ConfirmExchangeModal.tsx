import React from 'react';
import { Token } from '../../../store/features/types';
import { useRate } from '../../../store/features/tokens/tokensSlice';
import { useOpenModal } from '../../../store/features/modals/modalsSlice';
import Modal from '../../common/Modal/Modal';
import arrowDownIcon from '../../../assets/arrow-down.svg';
import Button from '../../common/Button/Button';
import ExchangeConfirmationStatusModal from '../ExchangeConfirmationStatusModal/ExchangeConfirmationStatusModal';
import './ConfirmExchangeModal.scss';

interface ConfirmExchangeModalProps {
  closeModal: () => void;
  fromToken: Token;
  toToken: Token;
  amount: number;
}

function ConfirmExchangeModal({
  closeModal: closeConfirmModal,
  fromToken,
  toToken,
  amount,
}: ConfirmExchangeModalProps) {
  const {
    rate,
    minReceived,
    priceImpact,
    liquidityProviderFee,
  } = useRate(fromToken, toToken, amount);
  const openModal = useOpenModal();

  const toAmount = amount * (rate?.price || 0);

  return (
    <Modal
      modalClassName="confirm-exchange-modal"
      title="Confirm Exchange"
      closeModal={closeConfirmModal}
    >
      <div className="confirm-exchange__card">
        <div className="confirm-exchange__card__line">
          <div className="confirm-exchange__card__line__icon">
            <img src={fromToken.icon} alt="ETH"/>
          </div>
          <div className="confirm-exchange__card__line__amount">
            {amount}
          </div>
          <div className="confirm-exchange__card__line__currency">
            {fromToken.symbol}
          </div>
        </div>
        <div className="confirm-exchange__card__arrow">
          <img src={arrowDownIcon} alt="Arrow down"/>
        </div>
        <div className="confirm-exchange__card__line">
          <div className="confirm-exchange__card__line__icon">
            <img src={toToken.icon} alt="ETH"/>
          </div>
          <div className="confirm-exchange__card__line__amount">
            {toAmount}
          </div>
          <div className="confirm-exchange__card__line__currency">
            {toToken.symbol}
          </div>
        </div>
      </div>

      <p className="confirm-exchange__text">
        <strong>Output is estimated</strong>
        . You will receive at least
        {' '}
        <strong>
          {minReceived}
          {' '}
          {toToken.symbol}
        </strong>
        {' '}
        or the transaction will revert.
      </p>

      <div className="confirm-exchange__summary">
        <div className="confirm-exchange__summary__line">
          <div className="confirm-exchange__summary__line__name">Price</div>
          <div
            className="confirm-exchange__summary__line__value"
          >
            {rate?.price}
            {' '}
            {toToken.symbol}
            {' '}
            /
            {' '}
            {fromToken.symbol}
          </div>
        </div>
        <div className="confirm-exchange__summary__line">
          <div className="confirm-exchange__summary__line__name">Minimum received</div>
          <div className="confirm-exchange__summary__line__value">
            {minReceived}
            {' '}
            {toToken.symbol}
          </div>
        </div>
        <div className="confirm-exchange__summary__line">
          <div className="confirm-exchange__summary__line__name">Price Impact</div>
          <div className="confirm-exchange__summary__line__value">
            {priceImpact}
            %
          </div>
        </div>
        <div className="confirm-exchange__summary__line">
          <div className="confirm-exchange__summary__line__name">Liquidity Provider Fee</div>
          <div className="confirm-exchange__summary__line__value">
            {liquidityProviderFee}
            {' '}
            {fromToken.symbol}
          </div>
        </div>
      </div>

      <Button
        onClick={() => openModal(({ closeModal }) => (
          <ExchangeConfirmationStatusModal
            amount={amount}
            minReceived={minReceived}
            fromToken={fromToken}
            toToken={toToken}
            closeConfirmModal={closeConfirmModal}
            closeModal={closeModal}
          />
        ))}
        full
        form
      >
        Confirm Exchange
      </Button>
    </Modal>
  );
}

export default ConfirmExchangeModal;
