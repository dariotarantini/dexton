import './Button.scss';
import React, { MouseEventHandler } from 'react';

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
}: ButtonProps) {
  return (
    <button
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'Button',
        full ? 'Button--full' : '',
        outline ? 'Button--outline' : '',
        form ? 'Button--form' : '',
        inactive ? 'Button--inactive' : '',
        className || '',
      ].join(' ')}
    >
      {beforeIcon}
      {icon && <div className="Button-icon">{icon}</div>}
      {children}
    </button>
  );
}

export default Button;
