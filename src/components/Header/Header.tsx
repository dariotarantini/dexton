import './Header.scss';
import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import { useWallet } from '../../features/wallet/walletSlice';
import { useOpenModal } from '../../features/modals/modalsSlice';
import AccountModal from '../AccountModal/AccountModal';

function Header() {
  const {
    wallet,
    isWalletConnected,
    connectWallet,
  } = useWallet();

  const openModal = useOpenModal();

  let shortAddress = '';
  if (wallet) {
    shortAddress = `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}`;
  }

  return (
    <header className="Header">
      <NavLink to="/" className="Header-logo">
        <img src={logo} alt="Logo"/>
        <span className="Header-logo__text">
          TON Swap
        </span>
      </NavLink>

      <div className="Header-links">
        <NavLink to="/" className="Header-link">
          Swap
        </NavLink>
        <NavLink to="/liquidity" className="Header-link">
          Liquidity
        </NavLink>
        <NavLink to="/charts" className="Header-link">
          Charts
        </NavLink>
      </div>

      {isWalletConnected
        ? (
          <Button
            beforeIcon={(
              <div style={{
                marginRight: '6px',
                fontWeight: 600,
              }}
              >
                {wallet?.balance}
              </div>
            )}
            onClick={() => {
              openModal(({ closeModal }) => (
                <AccountModal closeModal={closeModal}/>
              ));
            }}
            icon={(
              <svg
                style={{
                  marginRight: '4px',
                  width: 20,
                  height: 20,
                }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="9.5" stroke="currentColor"/>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.27659 6.00004L12.766 6C12.9602 6 13.1542 6.03209 13.357 6.13846C13.6002 6.26595 13.7291 6.46689 13.8194 6.61549C13.8264 6.62705 13.833 6.63897 13.8391 6.65116C13.9453 6.86382 14 7.09343 14 7.34042C14 7.57511 13.9504 7.83079 13.8391 8.05364C13.838 8.0558 13.8369 8.05788 13.8359 8.06001L10.3678 14.7621C10.2913 14.9099 10.1505 15.0006 9.99849 15C9.84648 14.9994 9.70627 14.9076 9.63074 14.7592L6.22632 8.07137C6.22534 8.06956 6.22436 8.06775 6.22338 8.06591C6.14547 7.92147 6.02498 7.69811 6.00391 7.40987C5.98454 7.14479 6.0375 6.8792 6.15589 6.64892C6.27428 6.4186 6.45251 6.23449 6.66689 6.12179C6.89675 6.00094 7.12968 6.00004 7.27659 6.00004ZM9.57446 6.95745H7.27659C7.12563 6.95745 7.06767 6.96791 7.02716 6.98923C6.97113 7.01864 6.92408 7.06705 6.89262 7.12823C6.86116 7.18946 6.84694 7.2604 6.85211 7.33142C6.85508 7.37212 6.86983 7.41868 6.95683 7.5801C6.95865 7.58348 6.96043 7.58691 6.96218 7.59033L9.57446 12.722V6.95745ZM10.4255 6.95745V12.7474L13.0983 7.58219C13.1285 7.52053 13.1489 7.43142 13.1489 7.34042C13.1489 7.26661 13.1353 7.20252 13.1049 7.13645C13.073 7.08482 13.0536 7.05749 13.0373 7.03877C13.0234 7.02277 13.0126 7.0142 12.9975 7.00625C12.9343 6.9731 12.8696 6.95745 12.766 6.95745H10.4255Z"
                  fill="currentColor"
                />
              </svg>
            )}
            className="Header-button"
            outline
          >
            {shortAddress}
          </Button>
        )
        : (
          <Button onClick={() => connectWallet()} className="Header-button">
            Connect wallet
          </Button>
        )}
    </header>
  );
}

export default Header;
