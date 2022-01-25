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
    <div className={['Card', className].join(' ')}>
      {
        (head || title)
        && (
          <div className="Card-head">
            {title && <div className="Card-title">{title}</div>}
            {head}
            {right && <div className="Card-head-right">{right}</div>}
          </div>
        )
      }

      {children && <div className="Card-body">{children}</div>}
    </div>
  );
}

export default Card;
