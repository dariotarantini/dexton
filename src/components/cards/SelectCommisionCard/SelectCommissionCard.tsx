import './SelectCommissionCard.scss';
import Tag from '../../common/Tag/Tag';

function SelectCommissionCard() {
  return (
    <div className="select-commission-card">
      0.5%

      <Tag color="green">
        Recommended
      </Tag>
      <Tag>
        80% select
      </Tag>

      <button className="select-commission-card__edit">
        Edit
      </button>
    </div>
  );
}

export default SelectCommissionCard;
