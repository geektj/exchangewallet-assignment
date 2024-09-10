import { FC } from "react";
import { ButtonProps } from "./@types";
import { baseCX, dangerCX, primaryCX } from "./styles";

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  primary,
  danger,
}) => (
  <button
    onClick={onClick}
    type="button"
    className={`${baseCX} ${
      danger ? dangerCX : primaryCX
    }`}
  >
    {children}
  </button>     
);