import React from 'react';

interface SvgIconProps {
  children: React.ReactNode;
  size?: number | string;
  color?: string;
  viewBox?: string;
  title?: string;
  className?: string;
  onClick?: () => void;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  children,
  size = 24,
  color = 'currentColor',
  viewBox = '0 0 24 24',
  title,
  className,
  onClick,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      onClick={onClick}
      role={title ? 'img' : 'presentation'}
      aria-hidden={!title}
      aria-labelledby={title ? `title-${title.replace(/\s+/g, '-')}` : undefined}
      {...rest}
    >
      {title && <title id={`title-${title.replace(/\s+/g, '-')}`}>{title}</title>}
      {children}
    </svg>
  );
};

export default SvgIcon;
