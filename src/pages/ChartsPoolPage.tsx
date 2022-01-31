import { Link, useParams } from 'react-router-dom';
import React from 'react';
import PageBackIcon from '../icons/PageBackIcon';
import { useAvailableTokens } from '../store/features/tokens/tokensSlice';
import Tokico from '../components/modals/Tokico/Tokico';
import Tag from '../components/common/Tag/Tag';
import Button from '../components/common/Button/Button';
import Card from '../components/common/Card/Card';
import GradientChart from '../components/common/Chart/GradientChart';
import TokenIcon from '../components/common/TokenIcon/TokenIcon';

function ChartsPoolPage() {
  const { pair } = useParams();

  const { tokens } = useAvailableTokens();

  const [firstTokenSymbol, secondTokenSymbol] = pair!.split('-');

  const fromToken = tokens.find((token) => token.symbol === firstTokenSymbol)!;
  const toToken = tokens.find((token) => token.symbol === secondTokenSymbol)!;

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
          <Button to={`/liquidity/add?from=${fromToken.symbol}&to=${toToken.symbol}`} outline>
            Add Liquidity
          </Button>
          <Button to={`/?from=${fromToken.symbol}&to=${toToken.symbol}`}>
            Swap
          </Button>
        </div>
      </div>

      <div className="page-content">
        <div className="pool-page-charts">
          <Card className="pool-information-card" title="Pool information">
            <div className="pool-information-card-items">
              <div className="pool-information-card-item">
                <div className="pool-information-card-item__name">
                  TVL
                </div>
                <div className="pool-information-card-item__value">
                  $127.3m
                </div>
              </div>
              <div className="pool-information-card-item">
                <div className="pool-information-card-item__name">
                  Volume 1Day
                </div>
                <div className="pool-information-card-item__value">
                  $127.3m
                </div>
              </div>
              <div className="pool-information-card-item">
                <div className="pool-information-card-item__name">
                  Fees 1Day
                </div>
                <div className="pool-information-card-item__value">
                  $5.14m
                </div>
              </div>
              <div className="pool-information-card-item">
                <div className="pool-information-card-item__name">
                  {fromToken.symbol}
                  {' '}
                  Locked
                  <TokenIcon url={fromToken.icon}/>
                </div>
                <div className="pool-information-card-item__value">
                  $107.2m
                </div>
              </div>
              <div className="pool-information-card-item">
                <div className="pool-information-card-item__name">
                  {toToken.symbol}
                  {' '}
                  Locked
                  <TokenIcon url={toToken.icon}/>
                </div>
                <div className="pool-information-card-item__value">
                  $20.1m
                </div>
              </div>
            </div>
          </Card>
          <Card className="chart-card">
            <div className="chart-card__label">
              TVL
            </div>
            <div className="chart-card__value">
              $123.4m
            </div>

            <div className="chart-card__chart">
              <GradientChart
                width={536}
                height={156}
                date
                color="blue"
                scalesX
                items={[
                  {
                    time: +new Date() / 1000,
                    price: 100,
                  },
                  {
                    time: +new Date() / 1000,
                    price: 200,
                  },
                  {
                    time: +new Date() / 1000,
                    price: 150,
                  },
                  {
                    time: +new Date() / 1000,
                    price: 150,
                  },
                ]}
              />
            </div>
          </Card>
        </div>

        <div className="pool-page-charts-info">
          <div className="pool-page-charts-info__left">
            1 TON = 0.00001245 ETH
            <TokenIcon url={toToken.icon}/>
          </div>
          <div className="pool-page-charts-info__divider"/>
          <div className="pool-page-charts-info__right">
            <TokenIcon url={fromToken.icon}/>
            1 ETH = 720 TON
          </div>
        </div>

        <div className="page-section">
          <h4 className="page-section__title">
            Transactions
          </h4>

          <div className="page-section__content">
            <Card>
              <div className="card-table">
                <div className="card-table__row">
                  <div className="card-table__col">Action</div>
                  <div className="card-table__col">Total Value</div>
                  <div className="card-table__col">Amount</div>
                  <div className="card-table__col">Amount</div>
                  <div className="card-table__col">Time</div>
                </div>
                <div className="card-table__row">
                  <a
                    href="https://explore.ton.org/..."
                    target="_blank"
                    className="card-table__col card-table__col--link"
                    rel="noreferrer"
                  >
                    Add
                    {' '}
                    {tokens[0].symbol}
                    and
                    {' '}
                    {tokens[1].symbol}
                  </a>
                  <div className="card-table__col">
                    $134k
                  </div>
                  <div className="card-table__col">
                    100
                    {' '}
                    {fromToken.symbol}
                  </div>
                  <div className="card-table__col">
                    243
                    {' '}
                    {toToken.symbol}
                  </div>
                  <a
                    href="https://explore.ton.org/..."
                    target="_blank"
                    className="card-table__col card-table__col--link"
                    rel="noreferrer"
                  >
                    0xC660...56dF
                  </a>
                  <div className="card-table__col">
                    now
                  </div>
                </div>
                <div className="card-table__row">
                  <a
                    href="https://explore.ton.org/..."
                    target="_blank"
                    className="card-table__col card-table__col--link"
                    rel="noreferrer"
                  >
                    Add
                    {' '}
                    {tokens[0].symbol}
                    and
                    {' '}
                    {tokens[1].symbol}
                  </a>
                  <div className="card-table__col">
                    $134k
                  </div>
                  <div className="card-table__col">
                    100
                    {' '}
                    {fromToken.symbol}
                  </div>
                  <div className="card-table__col">
                    243
                    {' '}
                    {toToken.symbol}
                  </div>
                  <a
                    href="https://explore.ton.org/..."
                    target="_blank"
                    className="card-table__col card-table__col--link"
                    rel="noreferrer"
                  >
                    0xC660...56dF
                  </a>
                  <div className="card-table__col">
                    now
                  </div>
                </div>
                <div className="card-table__row">
                  <a
                    href="https://explore.ton.org/..."
                    target="_blank"
                    className="card-table__col card-table__col--link"
                    rel="noreferrer"
                  >
                    Add
                    {' '}
                    {tokens[0].symbol}
                    and
                    {' '}
                    {tokens[1].symbol}
                  </a>
                  <div className="card-table__col">
                    $134k
                  </div>
                  <div className="card-table__col">
                    100
                    {' '}
                    {fromToken.symbol}
                  </div>
                  <div className="card-table__col">
                    243
                    {' '}
                    {toToken.symbol}
                  </div>
                  <a
                    href="https://explore.ton.org/..."
                    target="_blank"
                    className="card-table__col card-table__col--link"
                    rel="noreferrer"
                  >
                    0xC660...56dF
                  </a>
                  <div className="card-table__col">
                    now
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsPoolPage;
