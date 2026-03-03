import React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const toggleVariants = cva(
  "inline-flex items-center justify-center font-nb font-medium text-nb-text border-nb border-nb-border rounded-nb transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "bg-nb-surface data-[state=on]:bg-nb-primary",
        outline:
          "bg-transparent data-[state=on]:bg-nb-surface",
        ghost:
          "border-transparent shadow-none data-[state=on]:border-nb-border data-[state=on]:bg-nb-surface",
      },
      size: {
        sm: "h-8 px-2.5 text-sm gap-1.5",
        md: "h-10 px-3 text-base gap-2",
        lg: "h-12 px-4 text-lg gap-2.5",
      },
      shadow: {
        none: "",
        sm: "shadow-nb-sm data-[state=on]:shadow-nb-sm",
        md: "shadow-nb-md data-[state=on]:shadow-nb-md",
        lg: "shadow-nb-lg data-[state=on]:shadow-nb-lg",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
      shadow: "sm",
    },
  }
);

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, shadow, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, shadow }), className)}
    {...props}
  />
));
Toggle.displayName = "Toggle";
