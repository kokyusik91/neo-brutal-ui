import React from "react";
import { cn } from "../../lib/cn";
import { Card } from "../layout";

export interface WeatherCardProps extends React.HTMLAttributes<HTMLDivElement> {
  city: string;
  temperature: number;
  condition: string;
  icon?: React.ReactNode;
  high: number;
  low: number;
  humidity?: number;
}

export const WeatherCard = React.forwardRef<HTMLDivElement, WeatherCardProps>(
  (
    {
      className,
      city,
      temperature,
      condition,
      icon,
      high,
      low,
      humidity,
      ...props
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        shadow="md"
        padding="lg"
        className={cn("flex flex-col gap-4", className)}
        {...props}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="font-nb text-lg font-bold">{city}</h3>
            <span className="font-nb text-sm text-nb-text/60">{condition}</span>
          </div>
          {icon && <div className="text-4xl">{icon}</div>}
        </div>

        <div className="flex items-baseline gap-1">
          <span className="font-nb text-5xl font-black">{temperature}&deg;</span>
        </div>

        <div className="flex items-center gap-4 border-t-2 border-nb-border pt-3">
          <div className="flex flex-col items-center">
            <span className="font-nb text-xs text-nb-text/60">High</span>
            <span className="font-nb text-sm font-bold">{high}&deg;</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-nb text-xs text-nb-text/60">Low</span>
            <span className="font-nb text-sm font-bold">{low}&deg;</span>
          </div>
          {humidity !== undefined && (
            <div className="flex flex-col items-center">
              <span className="font-nb text-xs text-nb-text/60">Humidity</span>
              <span className="font-nb text-sm font-bold">{humidity}%</span>
            </div>
          )}
        </div>
      </Card>
    );
  },
);
WeatherCard.displayName = "WeatherCard";
