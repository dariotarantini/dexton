import { Link } from 'react-router-dom';
import Card from '../components/common/Card/Card';
import GradientChart from '../components/common/Chart/GradientChart';
import Tokico from '../components/modals/Tokico/Tokico';
import { useAvailableTokens } from '../store/features/tokens/tokensSlice';
import Tag from '../components/common/Tag/Tag';

function ChartsPage() {
  const { tokens } = useAvailableTokens();

  return (
    <div className="page">
      <h1 className="page-title">
        Charts
      </h1>

      <div className="page-content">
        <div className="page-charts">
          <Card className="chart-card">
            <div className="chart-card__label">
              TVL
            </div>
            <div className="chart-card__value">
              $123.4m
            </div>

            <div className="chart-card__chart">
              <GradientChart
                width={423}
                height={160}
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
          <Card>
            <div className="chart-card__label">
              Volume Day
            </div>
            <div className="chart-card__value">
              $12.3m
            </div>

            <div className="chart-card__chart">
              <GradientChart
                type="bar"
                width={423}
                height={160}
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

        <div className="page-section">
          <h4 className="page-section__title">
            Your Watchlist
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

        <div className="page-section">
          <h4 className="page-section__title">
            All Pools
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

              <div className="card-table-pagination">
                <div className="card-table-pagination__info">
                  Showing 1 to 10 of 349 pools
                </div>

                <div className="card-table-pagination__pages">
                  <button className="card-table-pagination__page-prev">
                    Previous
                  </button>

                  <button
                    className="card-table-pagination__page card-table-pagination__page--active"
                  >
                    1
                  </button>
                  <button className="card-table-pagination__page">
                    2
                  </button>
                  <button className="card-table-pagination__page">
                    3
                  </button>
                  <button className="card-table-pagination__page">
                    4
                  </button>

                  <button className="card-table-pagination__page-next">
                    Next
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsPage;
