import { Link } from 'react-router-dom';
import PageBackIcon from '../icons/PageBackIcon';
import AddLiquidityPageHistoryIcon from '../icons/AddLiquidityPageHistoryIcon';
import AddLiquidityPagePreferencesIcon from '../icons/AddLiquidityPagePreferencesIcon';
import TokenAmountInput from '../components/common/TokenAmountInput/TokenAmountInput';

function AddLiquidityPage() {
  return (
    <div className="page">
      <div className="page-head page-head--subpage">
        <Link to="/liquidity" className="page-back">
          <PageBackIcon/>
          Back
        </Link>
        <h1 className="page-title">
          Add liquidity
        </h1>
        <div className="page-toolbar">
          <button>
            <AddLiquidityPageHistoryIcon/>
          </button>
          <button>
            <AddLiquidityPagePreferencesIcon/>
          </button>
        </div>
      </div>

      <div className="page-content">
        <div className="page-blocks">
          <div className="page-blocks__col">
            <div className="page-block">
              <div className="page-block__title">
                Test
              </div>

              <TokenAmountInput label="From" token={null}/>
              <TokenAmountInput label="To" token={null}/>
            </div>
            <div className="page-block">
              <div className="page-block__title">
                Test
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLiquidityPage;
