import './AccountModal.scss';
import { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import { CloseModal } from '../../../store/features/modals/modalsSlice';
import { useWallet } from '../../../store/features/wallet/walletSlice';
import Button from '../../common/Button/Button';
import CopyIcon from '../../../icons/CopyIcon';

function AccountModalTransactionsHistoryTab() {
  return (
    <div className="TransactionsHistory">
      <div className="transactions-history-section">
        <div className="transactions-history__section__title">
          Pending
        </div>

        <div className="transactions-history__section__content">
          <div className="transactions-history__item">
            <div className="transactions-history__item__icon">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="22" fill="#0088CC"/>
                <path
                  d="M22 12C16.5 12 12 16.5 12 22C12 27.5 16.5 32 22 32C27.5 32 32 27.5 32 22C32 16.5 27.5 12 22 12ZM25.5 24C25.2 24.5 24.6 24.6 24.1 24.4L21.5 22.9C21.2 22.7 21 22.4 21 22V17C21 16.4 21.4 16 22 16C22.6 16 23 16.4 23 17V21.4L25.1 22.6C25.6 22.9 25.7 23.5 25.5 24Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="transactions-history__item__info">
              <div className="transactions-history__item__title">
                Exchange ETH to TON
              </div>
              <div className="transactions-history__item__time">
                12:32
              </div>
            </div>

            <div className="transactions-history__item__amount">
              100 TON
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccountModalWalletTabProps {
  closeModal: CloseModal;
}

function AccountModalWalletTab({ closeModal }: AccountModalWalletTabProps) {
  const {
    wallet,
    disconnectWallet,
  } = useWallet();

  const disconnect = () => {
    disconnectWallet();
    closeModal();
  };

  return (
    <>
      <div className="account-modal__items">
        <div className="account-modal__item">
          <div className="account-modal__item__name">
            Your Address
          </div>
          <div className="account-modal__item__value account-modal__item__value--address">
            {wallet?.address}
            {' '}
            <CopyIcon/>
          </div>
        </div>
        <div className="account-modal__item">
          <div className="account-modal__item__name">
            TON Balance
          </div>
          <div className="account-modal__item__value">
            {wallet?.balance}
            {' '}
            TON
          </div>
        </div>
      </div>

      <div className="account-modal__footer">
        <Button color="red" full form outline onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    </>
  );
}

interface AccountModalProps {
  closeModal: CloseModal;
}

function AccountModal({ closeModal }: AccountModalProps) {
  const [activeTab, setActiveTab] = useState('wallet');

  return (
    <Modal
      closeModal={closeModal}
      title="Account"
      modalClassName="account-modal"
    >
      <nav className="modal__tabs">
        <button
          onClick={() => setActiveTab('wallet')}
          className={['modal__tab', activeTab === 'wallet' ? 'active' : ''].join(' ')}
        >
          Wallet
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={['modal__tab', activeTab === 'history' ? 'active' : ''].join(' ')}
        >
          Transactions History
        </button>
      </nav>

      {
        activeTab === 'wallet'
          ? <AccountModalWalletTab closeModal={closeModal}/>
          : <AccountModalTransactionsHistoryTab/>
      }
    </Modal>
  );
}

export default AccountModal;
