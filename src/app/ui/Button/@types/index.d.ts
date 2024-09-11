export interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
  onClick: () => void;
}
