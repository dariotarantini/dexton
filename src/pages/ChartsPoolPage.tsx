import { Link, useParams } from 'react-router-dom';
import React from 'react';
import PageBackIcon from '../icons/PageBackIcon';
import { useAvailableTokens } from '../store/features/tokens/tokensSlice';
import Tokico from '../components/modals/Tokico/Tokico';
import Tag from '../components/common/Tag/Tag';
import Button from '../components/common/Button/Button';
import Card from '../components/common/Card/Card';
import GradientChart from '../components/common/Chart/GradientChart';

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
          <Button outline>
            Add Liquidity
          </Button>
          <Button>
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
                  ETH Locked
                </div>
                <div className="pool-information-card-item__value">
                  $107.2m
                </div>
              </div>
              <div className="pool-information-card-item">
                <div className="pool-information-card-item__name">
                  TON Locked
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
            1 ETH = 720 TON
          </div>
          <div className="pool-page-charts-info__divider"/>
          <div className="pool-page-charts-info__right">
            1 TON = 0.00001245 ETH
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
                  <div className="card-table__col">Pool</div>
                  <div className="card-table__col">TVL</div>
                  <div className="card-table__col">Volume 1Day</div>
                  <div className="card-table__col">Fees 1Day</div>
                </div>
                <div className="card-table__row">
                  <Link
                    to={`/charts/${tokens[0].symbol}-${tokens[1].symbol}`}
                    className="card-table__col"
                  >
                    <Tokico
                      fromToken={tokens[0]}
                      toToken={tokens[1]}
                    />

                    <Tag color="blue">
                      1%
                    </Tag>
                  </Link>
                  <div className="card-table__col">$512.12m</div>
                  <div className="card-table__col">$512.12m</div>
                  <div className="card-table__col">$512.12m</div>
                </div>
                <div className="card-table__row">
                  <Link
                    to={`/charts/${tokens[0].symbol}-${tokens[1].symbol}`}
                    className="card-table__col"
                  >
                    <Tokico
                      fromToken={tokens[0]}
                      toToken={tokens[1]}
                    />
                  </Link>
                  <div className="card-table__col">$512.12m</div>
                  <div className="card-table__col">$512.12m</div>
                  <div className="card-table__col">$512.12m</div>
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
