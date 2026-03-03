import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const inputVariants = cva(
  [
    "w-full",
    "font-nb text-nb-text",
    "bg-nb-surface",
    "border-nb border-nb-border rounded-nb",
    "shadow-nb-sm",
    "placeholder:text-nb-text/40",
    "transition-shadow duration-100",
    "focus:outline-none focus:shadow-nb-md",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-5 text-lg",
      },
      error: {
        true: "border-nb-danger focus:shadow-[4px_4px_0px_0px_theme(colors.nb.danger)]",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "size"> &
  VariantProps<typeof inputVariants>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, error }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants, type InputProps };
