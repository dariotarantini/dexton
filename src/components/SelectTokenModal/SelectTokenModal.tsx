import './SelectTokenModal.scss';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useAvailableTokens } from '../../features/tokens/tokensSlice';
import { Token } from '../../features/types';
import { useTokenBalance } from '../../features/wallet/walletSlice';

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
      className={['SelectTokenModal-item', selected ? 'selected' : ''].join(' ')}
    >
      <div className="SelectTokenModal-item__icon">
        <img src={token.icon} alt="ETH"/>
      </div>
      <div className="SelectTokenModal-item_name">
        <div className="SelectTokenModal-item_name__short">{token.symbol}</div>
        <div className="SelectTokenModal-item_name__full">{token.name}</div>
      </div>
      <div className="SelectTokenModal-item__amount">
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
      bodyClassName="SelectTokenModal-body"
      closeModal={closeModal}
    >
      <div className="SelectTokenModal-search">
        <input
          value={query}
          onInput={(event) => setQuery(event.currentTarget.value)}
          type="text"
          className="SearchInput"
          placeholder="Search name or paste address"
        />
      </div>

      <div className="SelectTokenModal-list">
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
