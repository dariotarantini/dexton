import './SelectCommissionCard.scss';
import React from 'react';
import Tag from '../../common/Tag/Tag';

interface FeeCardProps {
  amount?: 0.01 | 0.05 | 0.5 | 1 | number;
  onClick?: () => void;
  editIcon?: boolean;
  checkIcon?: boolean;
  disabled?: boolean;
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.5C3.875 0.5 0.5 3.875 0.5 8C0.5 12.125 3.875 15.5 8 15.5C12.125 15.5 15.5 12.125 15.5 8C15.5 3.875 12.125 0.5 8 0.5ZM11.15 6.725L7.55 10.325C7.25 10.625 6.8 10.625 6.5 10.325L4.85 8.675C4.55 8.375 4.55 7.925 4.85 7.625C5.15 7.325 5.6 7.325 5.9 7.625L7.025 8.75L10.1 5.675C10.4 5.375 10.85 5.375 11.15 5.675C11.45 5.975 11.45 6.425 11.15 6.725Z"
        fill="#0088CC"
      />
    </svg>
  );
}

function FeeCard({
  amount,
  onClick,
  editIcon = true,
  checkIcon = false,
  disabled = false,
}: FeeCardProps) {
  const tags = {
    0.01: [
      <Tag>
        Not created
      </Tag>,
    ],
    0.05: [
      <Tag color="blue">
        20% select
      </Tag>,
    ],
    0.5: [
      <Tag color="green">
        Recommended
      </Tag>,
      <Tag color="blue">
        80% select
      </Tag>,
    ],
    1: [
      <Tag color="blue">
        0% select
      </Tag>,
    ],
  }[amount || 0.5];

  return (
    <button
      className={['fee-card', checkIcon ? 'fee-card--active' : '', disabled ? 'fee-card--disabled' : ''].join(' ')}
      onClick={onClick ? () => onClick() : undefined}
    >
      {!disabled ? (
        <>
          {amount}
          %

          {tags}

          <span
            className="fee-card__edit"
          >
            {editIcon && 'Edit'}
            {checkIcon && <CheckIcon/>}
          </span>
        </>
      ) : <div/>}
    </button>
  );
}

export default FeeCard;
