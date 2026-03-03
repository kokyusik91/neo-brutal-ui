import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-nb font-semibold text-nb-text",
    "border-nb border-nb-border rounded-nb",
    "transition-all duration-100",
    "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        filled: "",
        outline: "bg-transparent",
        ghost: "bg-transparent border-transparent shadow-none",
      },
      color: {
        primary: "",
        secondary: "",
        accent: "",
        success: "",
        warning: "",
        danger: "",
        info: "",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-nb-sm active:shadow-none",
        md: "shadow-nb-md active:shadow-none",
        lg: "shadow-nb-lg active:shadow-none",
      },
    },
    compoundVariants: [
      // Filled variants
      { variant: "filled", color: "primary", className: "bg-nb-primary" },
      { variant: "filled", color: "secondary", className: "bg-nb-secondary" },
      { variant: "filled", color: "accent", className: "bg-nb-accent" },
      { variant: "filled", color: "success", className: "bg-nb-success" },
      { variant: "filled", color: "warning", className: "bg-nb-warning" },
      { variant: "filled", color: "danger", className: "bg-nb-danger" },
      { variant: "filled", color: "info", className: "bg-nb-info text-white" },
      // Outline variants
      {
        variant: "outline",
        color: "primary",
        className: "text-nb-primary border-nb-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        className: "text-nb-secondary border-nb-secondary",
      },
      {
        variant: "outline",
        color: "accent",
        className: "text-nb-accent border-nb-accent",
      },
      {
        variant: "outline",
        color: "success",
        className: "text-nb-success border-nb-success",
      },
      {
        variant: "outline",
        color: "warning",
        className: "text-nb-warning border-nb-warning",
      },
      {
        variant: "outline",
        color: "danger",
        className: "text-nb-danger border-nb-danger",
      },
      {
        variant: "outline",
        color: "info",
        className: "text-nb-info border-nb-info",
      },
      // Ghost variants
      {
        variant: "ghost",
        color: "primary",
        className: "text-nb-primary hover:bg-nb-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-nb-secondary hover:bg-nb-secondary/10",
      },
      {
        variant: "ghost",
        color: "accent",
        className: "text-nb-accent hover:bg-nb-accent/10",
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-nb-success hover:bg-nb-success/10",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-nb-warning hover:bg-nb-warning/10",
      },
      {
        variant: "ghost",
        color: "danger",
        className: "text-nb-danger hover:bg-nb-danger/10",
      },
      {
        variant: "ghost",
        color: "info",
        className: "text-nb-info hover:bg-nb-info/10",
      },
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
      shadow: "md",
    },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, shadow, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, color, size, shadow }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
