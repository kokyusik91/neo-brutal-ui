import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden border-nb border-nb-border rounded-nb font-nb",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-14 w-14 text-base",
      },
      shadow: {
        none: "",
        sm: "shadow-nb-sm",
        md: "shadow-nb-md",
        lg: "shadow-nb-lg",
      },
    },
    defaultVariants: {
      size: "md",
      shadow: "sm",
    },
  }
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

export const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, shadow, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, shadow }), className)}
    {...props}
  />
));
Avatar.displayName = "Avatar";

export interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

export const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

export interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  color?: "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "info";
}

const fallbackColorMap: Record<string, string> = {
  primary: "bg-nb-primary",
  secondary: "bg-nb-secondary",
  accent: "bg-nb-accent",
  success: "bg-nb-success",
  warning: "bg-nb-warning",
  danger: "bg-nb-danger",
  info: "bg-nb-info",
};

export const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, color = "primary", ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center font-nb font-bold text-nb-text",
      fallbackColorMap[color],
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
