import { Link, useParams } from 'react-router-dom';
import React from 'react';
import PageBackIcon from '../icons/PageBackIcon';
import { useAvailableTokens } from '../store/features/tokens/tokensSlice';
import Tokico from '../components/modals/Tokico/Tokico';
import Tag from '../components/common/Tag/Tag';
import Button from '../components/common/Button/Button';

function ChartsPoolPage() {
  const { pair } = useParams();

  const tokens = useAvailableTokens();

  const [firstTokenSymbol, secondTokenSymbol] = pair!.split('-');

  const fromToken = tokens.tokens.find((token) => token.symbol === firstTokenSymbol)!;
  const toToken = tokens.tokens.find((token) => token.symbol === secondTokenSymbol)!;

  return (
    <div className="page">
      <div className="page-head page-head--pool">
        <Link to="/charts" className="page-back">
          <PageBackIcon/>
          Back
        </Link>
        <div className="subpage-title">
          <Tokico fromToken={fromToken} toToken={toToken}/>

          <Tag color="blue">
            5%
          </Tag>
        </div>
        <div className="page-toolbar">
          <Button outline>
            Add Liquidity
          </Button>
          <Button>
            Swap
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChartsPoolPage;
