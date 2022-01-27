import './Button.scss';
import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  full?: boolean;
  icon?: React.ReactNode;
  beforeIcon?: React.ReactNode;
  outline?: boolean;
  disabled?: boolean;
  inactive?: boolean;
  form?: boolean;
  className?: string;
  to?: string;
  color?: string;
  children?: React.ReactNode;
  onClick?: MouseEventHandler;
  style?: any;
}

function Button({
  children,
  type = 'button',
  className,
  full = false,
  outline = false,
  disabled = false,
  inactive = false,
  onClick,
  icon,
  beforeIcon,
  form = false,
  style,
  color,
  to,
}: ButtonProps) {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
      to={to!}
      className={[
        'button',
        full ? 'button--full' : '',
        outline ? 'button--outline' : '',
        form ? 'button--form' : '',
        inactive ? 'button--inactive' : '',
        color ? `button--${color}` : '',
        className || '',
      ].join(' ')}
    >
      {beforeIcon}
      {icon && <div className="button-icon">{icon}</div>}
      {children}
    </Tag>
  );
}

export default Button;
