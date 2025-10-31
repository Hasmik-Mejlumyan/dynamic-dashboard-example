type AvatarSizeType = 'sm' | 'md' | 'lg';

export interface IAvatarProps {
  size?: AvatarSizeType;
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}
