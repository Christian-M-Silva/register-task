import { type IconName } from "lucide-react/dynamic";

// #region Interfaces
export interface ButtonProps {
  label?: string;
  colorBackground?: colors;
  icon?: IconName;
  colorIcon?: colors;
  sizeIcon?: number
  borders?: borders
}

export interface InputProps {
  borders?: borders
  placeholder: string
}
// #endregion

// #region Types
export type colors = "blue" | "yellow";

export const colorMap: Record<colors, string> = {
  blue: "bg-blue-600",
  yellow: "bg-yellow-600",
};

export type borders = "rounded-2xl" | "rounded-lg" | "rounded-l-2xl" | "rounded-r-2xl" | "rounded-r-lg" | "rounded-l-lg"
// #endregion
