export type NeoBrutalSize = "sm" | "md" | "lg";

export type NeoBrutalColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type NeoBrutalVariant = "filled" | "outline" | "ghost";

export interface NeoBrutalBaseProps {
  shadow?: "sm" | "md" | "lg" | "none";
}
