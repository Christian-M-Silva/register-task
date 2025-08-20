import { type IconName } from "lucide-react/dynamic";

// #region Interfaces
export interface ButtonProps {
  label: string;
  icon?: IconName;
  colorBackground?: colors;
  colorIcon?: colors;
}
// #endregion

// #region Types
export type colors = "blue";

export const colorMap: Record<colors, string> = {
  blue: "bg-blue-600"
};
// #endregion
