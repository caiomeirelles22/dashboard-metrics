import {
  formatCurrency,
  formatNumber,
  formatPercentage,
} from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number;
  type: "currency" | "number" | "percentage";
  change: number;
  className?: string;
}

export function MetricCard({
  title,
  value,
  type,
  change,
  className,
}: MetricCardProps) {
  const formattedValue =
    type === "currency"
      ? formatCurrency(value)
      : type === "percentage"
        ? formatPercentage(value)
        : formatNumber(value);

  const isPositive = change > 0;
  const isNegative = change < 0;

  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-slate-900 dark:border-slate-800",
        className,
      )}
    >
      <h3 className="text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400">
        {title}
      </h3>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-slate-900 dark:text-slate-50">
          {formattedValue}
        </span>
      </div>

      <div className="mt-1 flex items-center text-sm">
        {isPositive ? (
          <TrendingUp
            className="mr-1 h-4 w-4 text-emerald-500"
            data-testid="icon-up"
          />
        ) : isNegative ? (
          <TrendingDown
            className="mr-1 h-4 w-4 text-rose-500"
            data-testid="icon-down"
          />
        ) : (
          <Minus
            className="mr-1 h-4 w-4 text-slate-500"
            data-testid="icon-neutral"
          />
        )}

        <span
          className={cn(
            "font-medium",
            isPositive
              ? "text-emerald-500"
              : isNegative
                ? "text-rose-500"
                : "text-slate-500",
          )}
        >
          {formatPercentage(change, { showSign: true })}
        </span>
        <span className="ml-1 text-slate-500 dark:text-slate-400">
          vs. mês passado
        </span>
      </div>
    </div>
  );
}
