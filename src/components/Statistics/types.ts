export type IconType = 'cube' | 'layers' | 'label' | 'case';

export interface IMainStatProps {
  title: string;
  value: string | number;
  isCurrency: boolean;
  percentage: number;
  icon: IconType;
}
