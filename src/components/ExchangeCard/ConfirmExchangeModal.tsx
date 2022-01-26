import React from 'react';
import { Token } from '../../features/types';
import { useRate } from '../../features/tokens/tokensSlice';
import { useOpenModal } from '../../features/modals/modalsSlice';
import Modal from '../Modal/Modal';
import arrowDownIcon from '../../assets/arrow-down.svg';
import Button from '../Button/Button';
import ExchangeConfirmationStatusModal from './ExchangeConfirmationStatusModal';

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
      modalClassName="ConfirmExchangeModal"
      title="Confirm Exchange"
      closeModal={closeConfirmModal}
    >
      <div className="ConfirmExchange-card">
        <div className="ConfirmExchange-card__line">
          <div className="ConfirmExchange-card__line__icon">
            <img src={fromToken.icon} alt="ETH"/>
          </div>
          <div className="ConfirmExchange-card__line__amount">
            {amount}
          </div>
          <div className="ConfirmExchange-card__line__currency">
            {fromToken.symbol}
          </div>
        </div>
        <div className="ConfirmExchange-card__arrow">
          <img src={arrowDownIcon} alt="Arrow down"/>
        </div>
        <div className="ConfirmExchange-card__line">
          <div className="ConfirmExchange-card__line__icon">
            <img src={toToken.icon} alt="ETH"/>
          </div>
          <div className="ConfirmExchange-card__line__amount">
            {toAmount}
          </div>
          <div className="ConfirmExchange-card__line__currency">
            {toToken.symbol}
          </div>
        </div>
      </div>

      <p className="ConfirmExchange-text">
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

      <div className="ConfirmExchange-summary">
        <div className="ConfirmExchange-summary__line">
          <div className="ConfirmExchange-summary__line__name">Price</div>
          <div
            className="ConfirmExchange-summary__line__value"
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
        <div className="ConfirmExchange-summary__line">
          <div className="ConfirmExchange-summary__line__name">Minimum received</div>
          <div className="ConfirmExchange-summary__line__value">
            {minReceived}
            {' '}
            {toToken.symbol}
          </div>
        </div>
        <div className="ConfirmExchange-summary__line">
          <div className="ConfirmExchange-summary__line__name">Price Impact</div>
          <div className="ConfirmExchange-summary__line__value">
            {priceImpact}
            %
          </div>
        </div>
        <div className="ConfirmExchange-summary__line">
          <div className="ConfirmExchange-summary__line__name">Liquidity Provider Fee</div>
          <div className="ConfirmExchange-summary__line__value">
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
