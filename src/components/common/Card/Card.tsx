import './Card.scss';
import React from 'react';

interface CardProps {
  head?: React.ReactNode,
  title?: React.ReactNode,
  children?: React.ReactNode,
  right?: React.ReactNode,
  className?: string,
}

function Card({
  head,
  title,
  children,
  right,
  className,
}: CardProps) {
  return (
    <div className={['card', className].join(' ')}>
      {
        (head || title)
        && (
          <div className="card__head">
            {title && <div className="card__title">{title}</div>}
            {head}
            {right && <div className="card__head__right">{right}</div>}
          </div>
        )
      }

      {children && <div className="card__body">{children}</div>}
    </div>
  );
}

export default Card;
