import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-nb font-semibold text-nb-text",
    "border-nb border-nb-border rounded-nb",
  ],
  {
    variants: {
      variant: {
        filled: "",
        outline: "bg-transparent",
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
        sm: "h-5 px-1.5 text-xs",
        md: "h-6 px-2 text-sm",
        lg: "h-7 px-2.5 text-base",
      },
    },
    compoundVariants: [
      { variant: "filled", color: "primary", className: "bg-nb-primary" },
      { variant: "filled", color: "secondary", className: "bg-nb-secondary" },
      { variant: "filled", color: "accent", className: "bg-nb-accent" },
      { variant: "filled", color: "success", className: "bg-nb-success" },
      { variant: "filled", color: "warning", className: "bg-nb-warning" },
      { variant: "filled", color: "danger", className: "bg-nb-danger" },
      { variant: "filled", color: "info", className: "bg-nb-info text-white" },
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
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
    },
  },
);

type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, color, size, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, color, size }), className)}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export { Badge, badgeVariants, type BadgeProps };
