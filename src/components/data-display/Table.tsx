import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";

const tableWrapperVariants = cva(
  "w-full overflow-auto border-nb border-nb-border rounded-nb shadow-nb-md",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableWrapperVariants> {
  striped?: boolean;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, size, striped, children, ...props }, ref) => {
    return (
      <div className={cn(tableWrapperVariants({ size }))}>
        <table
          ref={ref}
          className={cn(
            "w-full caption-bottom font-nb text-nb-text",
            striped && "[&_tbody_tr:nth-child(even)]:bg-nb-bg",
            className
          )}
          {...props}
        >
          {children}
        </table>
      </div>
    );
  }
);
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "border-b-nb border-nb-border bg-nb-accent font-bold",
      className
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b-nb border-nb-border transition-colors hover:bg-nb-bg/50",
      className
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-bold text-nb-text",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("px-4 py-3 align-middle", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";
