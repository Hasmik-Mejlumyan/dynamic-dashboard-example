import type { FC } from 'react';
import type { IAvatarProps } from './types.ts';

const defaultAvatar = '/images/empty-avatar.webp';

const Avatar: FC<IAvatarProps> = ({
  size = 'md',
  src = defaultAvatar,
  alt,
  className,
  imgClassName,
}) => {
  const sizeClasses = {
    sm: 'size-7',
    md: 'size-8',
    lg: 'size-9',
  };

  return (
    <div className={`rounded-full ${sizeClasses[size]} ${className}`}>
      <img
        className={`rounded-full w-full h-full block ${imgClassName}`}
        src={src}
        alt={alt}
      />
    </div>
  )
};

export default Avatar;
