import React from "react";
import { getDashboardData } from "@/services/dashboardService";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CampaignTable } from "@/components/dashboard/CampaignTable";

export default async function Home() {
  const data = await getDashboardData();

  return (
    <main className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Visão Geral
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Acompanhe o desempenho das suas campanhas B2B em tempo real.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.metrics.map((metric, index) => (
            <MetricCard
              key={`metric-${index}`}
              title={metric.label}
              value={metric.value}
              type={metric.type}
              change={metric.change}
            />
          ))}
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Desempenho por Campanha
          </h2>
          <CampaignTable campaigns={data.campaigns} />
        </section>
      </div>
    </main>
  );
}
