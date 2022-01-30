import './TokenAmountInput.scss';
import { useOpenModal } from '../../../store/features/modals/modalsSlice';
import SelectTokenModal from '../../modals/SelectTokenModal/SelectTokenModal';
import { Token } from '../../../store/features/types';
import { useTokenBalance, useWallet } from '../../../store/features/wallet/walletSlice';

interface TokenAmountInputProps {
  label?: string;
  disabled?: boolean;
  token: Token | null;
  onChangeToken?: (token: Token) => void;
  value?: string;
  onChangeValue?: (value: string) => void;
}

function TokenAmountInput({
  label,
  disabled = false,
  token,
  onChangeToken,
  value,
  onChangeValue,
}: TokenAmountInputProps) {
  const openModal = useOpenModal();
  const { isWalletConnected } = useWallet();
  const { balance: tokenBalance } = useTokenBalance(token || null);

  function makeBalanceLine() {
    if (!isWalletConnected) {
      return 'Wallet not connected';
    }

    if (token) {
      return (
        <>
          Balance:
          {' '}
          <span
            className="token-amount-input__amount__balance-value"
            onClick={() => onChangeValue && onChangeValue(String(tokenBalance))}
          >
            {tokenBalance}
            {' '}
            {token?.symbol}
          </span>
        </>
      );
    }

    return 'Select token';
  }

  return (
    <div className="token-amount-input">
      <div className="token-amount-input__amount">
        <div
          className={['token-amount-input__amount__balance', !isWalletConnected ? 'not-connected' : ''].join(' ')}
        >
          {makeBalanceLine()}
        </div>
        <input
          type="number"
          disabled={disabled}
          value={value}
          className="token-amount-input__amount__input"
          onKeyPress={(event) => {
            const charCode = (typeof event.which === 'undefined') ? event.keyCode : event.which;
            const charStr = String.fromCharCode(charCode);

            if (!charStr.match(/^[0-9.]$/)) {
              event.preventDefault();
            }
          }}
          onInput={(event) => {
            if (event.target instanceof HTMLInputElement) {
              if (onChangeValue) {
                onChangeValue(event.target.value || '');
              }
            }
          }}
          placeholder="0.00"
        />
      </div>
      <div className="token-amount-input__currency">
        {
          label && (
            <div className="token-amount-input__currency__label">
              {label}
            </div>
          )
        }
        <button
          onClick={() => openModal(({ closeModal }: any) => (
            <SelectTokenModal
              onSelect={onChangeToken}
              closeModal={closeModal}
              selectedToken={token}
            />
          ))}
          type="button"
          className="token-amount-input__currency-select"
        >
          {token && (
            <div className="token-amount-input__currency-select__icon">
              <img src={token?.icon} alt="Icon"/>
            </div>
          )}
          <div
            className="token-amount-input__currency-select__name"
          >
            {token ? token.symbol : 'Select Token'}
          </div>
          <div className="token-amount-input__currency-select__arrow">
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.81501 0.1997C8.06166 0.465966 8.06166 0.89767 7.81501 1.16394L4.44659 4.8003C4.19995 5.06657 3.80005 5.06657 3.55341 4.8003L0.184985 1.16394C-0.0616617 0.89767 -0.0616617 0.465967 0.184985 0.1997C0.431632 -0.0665663 0.831526 -0.0665664 1.07817 0.1997L4 3.35395L6.92183 0.1997C7.16847 -0.0665666 7.56837 -0.0665666 7.81501 0.1997Z"
                fill="#303757"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default TokenAmountInput;
