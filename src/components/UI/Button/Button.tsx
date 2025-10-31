import type { FC } from 'react';
import type { IButtonProps } from './types.ts';


const Button: FC<IButtonProps> = ({
  variant = 'primary',
  icon,
  contentClassName = '',
  isLoading,
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary text-white active:bg-primary-dark focus:ring-primary transition-colors transition-shadow',
    secondary: 'bg-secondary text-white active:bg-secondary-darker !ring-0 hover:bg-secondary-dark transition-colors transition-shadow',
    icon: 'bg-transparent !ring-0',
  };

  const buttonContent = (
    icon ? (
      <>
        {icon}
        {children}
      </>
    ) : (
      children
    )
  );

  return (
    <button className={`hover:cursor-pointer py-1 px-2 rounded focus:ring-2 ${variantClasses[variant]} ${className}`} {...props}>
      <div className={`flex items-center justify-center gap-2 ${contentClassName}`}>
        {variant === 'icon' && icon ? icon : buttonContent}
      </div>
    </button>
  )
};

export default Button;
