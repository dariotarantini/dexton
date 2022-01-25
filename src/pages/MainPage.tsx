import React from 'react';
import ExchangeCard from '../components/ExchangeCard/ExchangeCard';
import PairChartCard from '../components/PairChartCard/PairChartCard';
import PageSection from '../components/PageSection/PageSection';
import PairCard from '../components/PairCard/PairCard';
import { usePopularSwaps } from '../features/swap/swapSlice';

function MainPage() {
  const popularSwaps = usePopularSwaps();

  return (
    <div className="Page">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '.43fr .57fr',
        gridGap: '25px',
      }}
      >
        <ExchangeCard/>
        <PairChartCard/>
      </div>

      <PageSection title="Popular swaps">
        <div style={{
          display: 'flex',
        }}
        >
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
