import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Card from '../Card/Card';
import TokenAmountInput from '../TokenAmountInput/TokenAmountInput';
import Button from '../Button/Button';
import './ExchangeCard.scss';
import switchIcon from '../../assets/switch.svg';
import clockIcon from '../../assets/clock.svg';
import preferencesIcon from '../../assets/preferences.svg';
import { useOpenModal } from '../../features/modals/modalsSlice';
import infoIcon from '../../assets/info.svg';
import { useTokenBalance, useWallet } from '../../features/wallet/walletSlice';
import { useAvailableTokens, useRate } from '../../features/tokens/tokensSlice';
import { useSwap } from '../../features/swap/swapSlice';
import ConfirmExchangeModal from './ConfirmExchangeModal';
import makeInfoTooltipContent from './makeInfoTooltipContent';
import ExchangeSettingsModal from './ExchangeSettingsModal';

function ExchangeCard() {
  const openModal = useOpenModal();

  const {
    fromToken,
    toToken,
    setFromToken,
    setToToken,
  } = useSwap();

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

  return (
    <Card
      right={(
        <>
          <img src={clockIcon} alt="History" className="Card-icon"/>
          <img
            onClick={() => openSettings()}
            src={preferencesIcon}
            alt="Preferences"
            className="Card-icon"
          />
        </>
      )}
      className="ExchangeCard"
      title="Swap your tokens"
    >
      <div className="ExchangeCard-inputs">
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
          className="ExchangeCard-switch_button"
        >
          <img src={switchIcon} alt="Switch"/>
        </button>
      </div>

      {(fromToken && toToken) && (
        <div className="ExchangeCard-info">
          <img data-tip="" data-for="test" src={infoIcon} alt="Info"/>

          <span className="ExchangeCard-info-text">
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
            <span className="ExchangeCard-info__text--muted">($2,740.54)</span>
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
        className="ExchangeCard-tooltip"
        id="test"
        getContent={() => makeInfoTooltipContent(useRateResult)}
      />
    </Card>
  );
}

export default ExchangeCard;
