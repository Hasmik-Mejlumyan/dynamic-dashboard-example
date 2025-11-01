export interface IHeaderProps {
  onSideBarOpen?: () => void;
}

export interface ISideBarProps {
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
}
