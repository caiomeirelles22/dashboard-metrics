import React from "react";
import { InvestmentChartSkeleton } from "./InvestmentChartSkeleton";
import { CampaignTableSkeleton } from "./CampaignTableSkeleton";
import { MetricCardSkeleton } from "./MetricCardSkeleton";

export function DashboardSkeletons() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <MetricCardSkeleton />
        <MetricCardSkeleton />
        <MetricCardSkeleton />
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-1">
          <InvestmentChartSkeleton />
        </section>
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-7 w-48 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
            <div className="h-6 w-24 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
          </div>
          <CampaignTableSkeleton />
        </section>
      </div>
    </div>
  );
}

export default DashboardSkeletons;
