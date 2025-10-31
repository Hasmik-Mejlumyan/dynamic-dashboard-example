import type { PropsWithChildren, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariantType = 'primary' | 'secondary' | 'icon';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  isLoading?: boolean;
  contentClassName?: string;
  icon?: ReactNode;
}
