import React from "react";
import { cn } from "../../lib/cn";
import type { NeoBrutalColor } from "../../lib/types";
import { Button, Badge } from "../primitives";
import { Card } from "../layout";

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string;
  period?: string;
  features: string[];
  ctaText: string;
  ctaOnClick?: () => void;
  highlighted?: boolean;
  color?: NeoBrutalColor;
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      price,
      period = "/mo",
      features,
      ctaText,
      ctaOnClick,
      highlighted = false,
      color = "primary",
      ...props
    },
    ref,
  ) => {
    const colorBorderMap: Record<string, string> = {
      primary: "border-nb-primary",
      secondary: "border-nb-secondary",
      accent: "border-nb-accent",
      success: "border-nb-success",
      warning: "border-nb-warning",
      danger: "border-nb-danger",
      info: "border-nb-info",
    };

    return (
      <Card
        ref={ref}
        shadow={highlighted ? "lg" : "md"}
        padding="lg"
        className={cn(
          "relative flex flex-col gap-6",
          highlighted && colorBorderMap[color],
          className,
        )}
        {...props}
      >
        {highlighted && (
          <Badge
            color={color}
            size="sm"
            className="absolute -top-3 left-1/2 -translate-x-1/2"
          >
            Popular
          </Badge>
        )}

        <div className="text-center">
          <h3 className="font-nb text-lg font-bold">{title}</h3>
          <div className="mt-2 flex items-baseline justify-center gap-1">
            <span className="font-nb text-4xl font-black">{price}</span>
            <span className="font-nb text-sm text-nb-text/60">{period}</span>
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 font-nb text-sm">
              <span className="text-nb-success font-bold">&#10003;</span>
              {feature}
            </li>
          ))}
        </ul>

        <Button
          color={color}
          variant={highlighted ? "filled" : "outline"}
          className="mt-auto w-full"
          onClick={ctaOnClick}
        >
          {ctaText}
        </Button>
      </Card>
    );
  },
);
PricingCard.displayName = "PricingCard";
