import { useState } from 'react';
import Button from '../components/common/Button/Button';
import emptyImage from '../assets/empty.svg';
import LiquidityCard from '../components/cards/LiquidityCard/LiquidityCard';
import { useWallet } from '../store/features/wallet/walletSlice';

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.25 5.25H6.75V0.75C6.75 0.551088 6.67098 0.360322 6.53033 0.21967C6.38968 0.0790178 6.19891 0 6 0C5.80109 0 5.61032 0.0790178 5.46967 0.21967C5.32902 0.360322 5.25 0.551088 5.25 0.75V5.25H0.75C0.551088 5.25 0.360322 5.32902 0.21967 5.46967C0.0790178 5.61032 0 5.80109 0 6C0 6.19891 0.0790178 6.38968 0.21967 6.53033C0.360322 6.67098 0.551088 6.75 0.75 6.75H5.25V11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25V6.75H11.25C11.4489 6.75 11.6397 6.67098 11.7803 6.53033C11.921 6.38968 12 6.19891 12 6C12 5.80109 11.921 5.61032 11.7803 5.46967C11.6397 5.32902 11.4489 5.25 11.25 5.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LiquidityPage() {
  const {
    isWalletConnected,
    connectWallet,
  } = useWallet();

  const [tab, setTab] = useState('all');

  return (
    <div className="page">
      <div className="page-head">
        <h1 className="page-title">
          Your Liquidity
        </h1>
        {
          isWalletConnected && (
            <div className="page-tabs">
              <button
                onClick={() => setTab('all')}
                type="button"
                className={['page-tab', tab === 'all' ? 'active' : ''].join(' ')}
              >
                All
                <span className="page-tab__count">(12)</span>
              </button>
              <button
                onClick={() => setTab('active')}
                type="button"
                className={['page-tab', tab === 'active' ? 'active' : ''].join(' ')}
              >
                Active
                <span className="page-tab__count">(5)</span>
              </button>
              <button
                onClick={() => setTab('removed')}
                type="button"
                className={['page-tab', tab === 'removed' ? 'active' : ''].join(' ')}
              >
                Removed
                <span className="page-tab__count">(7)</span>
              </button>
            </div>
          )
        }

        <Button to="/liquidity/add" style={{ marginLeft: 'auto' }} outline icon={<PlusIcon/>}>
          Add liquidity
        </Button>
      </div>

      <div className="page-content">
        {
          !isWalletConnected ? (
            <div className="page-content__empty">
              <img className="Page-content-empty-image" src={emptyImage} alt="Empty"/>

              <div className="page-content__empty__text">
                Currently you don’t have any liquidity.
                <br/>
                Try to add new.
              </div>

              <Button onClick={() => connectWallet()} form>
                Connect Wallet
              </Button>
            </div>
          ) : (
            <div className="Liquidity-cards">
              <LiquidityCard/>
              <LiquidityCard/>
              <LiquidityCard/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default LiquidityPage;
