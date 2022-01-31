import React from 'react';
import ExchangeCard from '../components/cards/ExchangeCard/ExchangeCard';
import PairChartCard from '../components/cards/PairChartCard/PairChartCard';
import PageSection from '../components/page/PageSection/PageSection';
import PairCard from '../components/cards/PairCard/PairCard';
import { usePopularSwaps } from '../store/features/swap/swapSlice';

function MainPage() {
  const popularSwaps = usePopularSwaps();

  return (
    <div className="page">
      <div className="main-page__cards-grid">
        <ExchangeCard/>
        <PairChartCard/>
      </div>

      <PageSection title="Popular swaps">
        <div className="popular-swaps">
          {
            popularSwaps.map((swap) => (
              <PairCard
                fromToken={swap.fromToken}
                toToken={swap.toToken}
              />
            ))
          }
        </div>
      </PageSection>
    </div>
  );
}

export default MainPage;
