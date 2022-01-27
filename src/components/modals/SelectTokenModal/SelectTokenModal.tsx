import './SelectTokenModal.scss';
import { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import { useAvailableTokens } from '../../../store/features/tokens/tokensSlice';
import { Token } from '../../../store/features/types';
import { useTokenBalance } from '../../../store/features/wallet/walletSlice';

export type SelectTokenCallback = (token: Token) => void;

interface TokenItemProps {
  token: Token;
  closeModal: () => void;
  onSelect?: SelectTokenCallback;
  selected: boolean;
}

function TokenItem({
  token,
  closeModal,
  onSelect,
  selected,
}: TokenItemProps) {
  const { balance } = useTokenBalance(token);

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      role="button"
      onClick={() => {
        if (onSelect) {
          onSelect(token);
          closeModal();
        }
      }}
      className={['select-token-modal__item', selected ? 'selected' : ''].join(' ')}
    >
      <div className="select-token-modal__item__icon">
        <img src={token.icon} alt="ETH"/>
      </div>
      <div className="select-token-modal__item__name">
        <div className="select-token-modal__item__name__short">{token.symbol}</div>
        <div className="select-token-modal__item__name__full">{token.name}</div>
      </div>
      <div className="select-token-modal__item__amount">
        {balance}
        {' '}
        {token.symbol}
      </div>
    </div>
  );
}

interface SelectTokenModalProps {
  closeModal: () => void;
  onSelect?: SelectTokenCallback;
  selectedToken: Token | null;
}

function SelectTokenModal({
  closeModal,
  onSelect,
  selectedToken,
}: SelectTokenModalProps) {
  const { tokens } = useAvailableTokens();

  const [query, setQuery] = useState('');

  const filteredTokens = query.length
    ? tokens.filter(
      (token) => token.symbol.toLowerCase()
        .includes(query.toLowerCase())
        || token.name.toLowerCase()
          .includes(query.toLowerCase()),
    )
    : tokens;

  return (
    <Modal
      title="Select Token"
      modalClassName="SelectTokenModal"
      bodyClassName="select-token-modal-body"
      closeModal={closeModal}
    >
      <div className="select-token-modal__search">
        <input
          value={query}
          onInput={(event) => setQuery(event.currentTarget.value)}
          type="text"
          className="search-input"
          placeholder="Search name or paste address"
        />
      </div>

      <div className="select-token-modal__list">
        {filteredTokens
          .map((token: Token) => (
            <TokenItem
              selected={selectedToken?.symbol === token.symbol}
              key={token.symbol}
              token={token}
              onSelect={onSelect}
              closeModal={closeModal}
            />
          ))}
      </div>
    </Modal>
  );
}

export default SelectTokenModal;
