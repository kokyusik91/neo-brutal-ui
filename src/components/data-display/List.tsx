import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const listVariants = cva("font-nb text-nb-text", {
  variants: {
    variant: {
      plain: "space-y-1",
      bordered:
        "divide-y-[3px] divide-nb-border border-nb border-nb-border rounded-nb overflow-hidden",
      card: "space-y-3",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "plain",
    size: "md",
  },
});

const listItemVariants = cva("flex items-center gap-3", {
  variants: {
    variant: {
      plain: "py-1",
      bordered: "px-4 py-3 bg-nb-surface",
      card: "px-4 py-3 border-nb border-nb-border rounded-nb bg-nb-surface shadow-nb-sm",
    },
  },
  defaultVariants: {
    variant: "plain",
  },
});

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  ordered?: boolean;
}

export const List = React.forwardRef<HTMLElement, ListProps>(
  ({ className, variant, size, ordered, children, ...props }, ref) => {
    const Component = ordered ? "ol" : "ul";
    return (
      <Component
        ref={ref as React.Ref<HTMLUListElement> & React.Ref<HTMLOListElement>}
        className={cn(listVariants({ variant, size }), className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<ListItemProps>(child)) {
            return React.cloneElement(child, { variant } as Partial<ListItemProps>);
          }
          return child;
        })}
      </Component>
    );
  }
);
List.displayName = "List";

export interface ListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listItemVariants> {
  icon?: React.ReactNode;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, variant, icon, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(listItemVariants({ variant }), className)}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span className="flex-1">{children}</span>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
