import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Card from '../../common/Card/Card';
import TokenAmountInput from '../../common/TokenAmountInput/TokenAmountInput';
import Button from '../../common/Button/Button';
import './ExchangeCard.scss';
import switchIcon from '../../../assets/switch.svg';
import clockIcon from '../../../assets/clock.svg';
import preferencesIcon from '../../../assets/preferences.svg';
import { useOpenModal } from '../../../store/features/modals/modalsSlice';
import infoIcon from '../../../assets/info.svg';
import { useTokenBalance, useWallet } from '../../../store/features/wallet/walletSlice';
import { useAvailableTokens, useRate } from '../../../store/features/tokens/tokensSlice';
import { useSwap } from '../../../store/features/swap/swapSlice';
import ConfirmExchangeModal from '../../modals/ConfirmExchangeModal/ConfirmExchangeModal';
import makeInfoTooltipContent from './makeInfoTooltipContent';
import ExchangeSettingsModal from '../../modals/ExchangeSettingsModal/ExchangeSettingsModal';
import { useQuery } from '../../../utils/hooks';
import AccountModal from '../../modals/AccountModal/AccountModal';

function ExchangeCard() {
  const openModal = useOpenModal();

  const {
    fromToken,
    toToken,
    setFromToken,
    setToToken,
  } = useSwap();

  const query = useQuery();
  const from = query.get('from');
  const to = query.get('to');

  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');

  const amount = Number.isNaN(parseFloat(fromValue)) ? 0 : parseFloat(fromValue);

  const useRateResult = useRate(fromToken, toToken, amount);
  const { rate } = useRateResult;

  const { balance: fromTokenBalance } = useTokenBalance(fromToken);

  const {
    isWalletConnected,
    connectWallet,
  } = useWallet();

  const {
    tokens,
  } = useAvailableTokens();

  useEffect(() => {
    if ((!fromToken || !toToken) && tokens.length > 1) {
      setFromToken(tokens[0]);
      setToToken(tokens[1]);
    }
  }, [fromToken, toToken, tokens]);

  useEffect(() => {
    if (from) {
      setFromToken(tokens.find((t) => t.symbol === from) || null);
    }

    if (to) {
      setToToken(tokens.find((t) => t.symbol === to) || null);
    }
  }, [from, to]);

  function doExchange() {
    openModal(({ closeModal }) => (
      <ConfirmExchangeModal
        fromToken={fromToken!}
        toToken={toToken!}
        amount={parseFloat(fromValue)}
        closeModal={closeModal}
      />
    ));
  }

  function openSettings() {
    openModal(({ closeModal }) => <ExchangeSettingsModal closeModal={closeModal}/>);
  }

  function openHistory() {
    openModal(({ closeModal }) => (
      <AccountModal tab="history" closeModal={closeModal}/>
    ));
  }

  return (
    <Card
      right={(
        <>
          <img
            onClick={() => openHistory()}
            src={clockIcon}
            alt="History"
            className="card__icon"
          />
          <img
            onClick={() => openSettings()}
            src={preferencesIcon}
            alt="Preferences"
            className="card__icon"
          />
        </>
      )}
      title="Swap your tokens"
    >
      <div className="exchange-card">
        <TokenAmountInput
          value={fromValue}
          disabled={!fromToken}
          onChangeValue={(value) => {
            setFromValue(value);

            const numVal = parseFloat(value);
            if (Number.isNaN(numVal)) {
              setToValue('');
            } else {
              const price = rate?.price || 0;

              setToValue(String(numVal * price));
            }
          }}
          token={fromToken}
          onChangeToken={(token) => {
            if (token.symbol === toToken?.symbol) {
              return;
            }

            setFromToken(token);
          }}
          label="From"
        />
        <TokenAmountInput
          value={toValue}
          disabled={!toToken}
          onChangeValue={(value) => {
            setToValue(value);

            const numVal = parseFloat(value);
            if (Number.isNaN(numVal)) {
              setFromValue('');
            } else {
              const reversePrice = rate?.reversePrice || 0;

              setFromValue(String(numVal * reversePrice));
            }
          }}
          token={toToken}
          onChangeToken={(token) => {
            if (token.symbol === fromToken?.symbol) {
              return;
            }

            setToToken(token);
          }}
          label="To"
        />

        <button
          onClick={() => {
            const fromCopy = fromToken;

            setFromToken(toToken);
            setToToken(fromCopy);

            setFromValue(toValue);

            const numVal = parseFloat(toValue);
            if (Number.isNaN(numVal)) {
              setToValue('');
            } else {
              const price = rate?.price || 0;

              setToValue(String(numVal * price));
            }
          }}
          type="button"
          className="exchange-card__switch_button"
        >
          <img src={switchIcon} alt="Switch"/>
        </button>
      </div>

      {(fromToken && toToken) && (
        <div className="exchange-card__info">
          <img data-tip="" data-for="test" src={infoIcon} alt="Info"/>

          <span className="exchange-card__info__text">
            1
            {' '}
            {fromToken?.symbol}
            {' '}
            =
            {' '}
            {rate?.price}
            {' '}
            {toToken?.symbol}
            {' '}
            <span className="muted">($2,740.54)</span>
          </span>
        </div>
      )}

      {isWalletConnected ? (
        <Button
          disabled={
            !fromToken
            || !toToken
            || fromToken.symbol === toToken.symbol
            || !fromValue.trim().length
            || !toValue.trim().length
            || fromTokenBalance < parseFloat(fromValue)
          }
          onClick={() => doExchange()}
          full
          form
        >
          Exchange
        </Button>
      ) : <Button onClick={() => connectWallet()} full form>Connect Wallet</Button>}

      <ReactTooltip
        place="right"
        delayHide={1000}
        effect="solid"
        className="exchange-card__tooltip"
        id="test"
        getContent={() => makeInfoTooltipContent(useRateResult)}
      />
    </Card>
  );
}

export default ExchangeCard;
