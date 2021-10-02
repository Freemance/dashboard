export interface IProps {
  isOpen: boolean;
  message?: string;
  onConfirm: (arg0: boolean) => void;
  title?: string;
  variant?: string;
}
