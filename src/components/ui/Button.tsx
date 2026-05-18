import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className,
}: ButtonProps) {
  const cls = clsx(styles.btn, styles[variant], styles[size], className);

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
