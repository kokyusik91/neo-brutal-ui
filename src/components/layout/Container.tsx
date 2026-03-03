import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const containerVariants = cva("mx-auto w-full px-4", {
  variants: {
    size: {
      sm: "max-w-[640px]",
      md: "max-w-[768px]",
      lg: "max-w-[1024px]",
      xl: "max-w-[1280px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size }), className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";
