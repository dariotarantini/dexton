import './Tag.scss';
import React from 'react';

interface TagProps {
  children?: React.ReactNode;
  color?: string;
}

function Tag({
  children,
  color,
}: TagProps) {
  return (
    <div className={['tag', `tag--${color}`].join(' ')}>
      {children}
    </div>
  );
}

export default Tag;
