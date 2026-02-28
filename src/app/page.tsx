import React from "react";
import { getDashboardData } from "@/services/dashboardService";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CampaignTable } from "@/components/dashboard/CampaignTable";
import { DashboardFilters } from "@/components/dashboard/DashboardFilters";

interface PageProps {
  searchParams: Promise<{
    status?: string;
    channel?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  const filters = await searchParams;

  const data = await getDashboardData();

  const filteredCampaigns = data.campaigns.filter((campaign) => {
    const matchStatus = !filters.status || campaign.status === filters.status;
    const matchChannel =
      !filters.channel || campaign.channel === filters.channel;
    return matchStatus && matchChannel;
  });

  return (
    <main className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Visão Geral
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
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

        <section className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Desempenho por Campanha
            </h2>
            <div className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {filteredCampaigns.length} campanhas encontradas
            </div>
          </div>

          <DashboardFilters />

          {filteredCampaigns.length > 0 ? (
            <CampaignTable campaigns={filteredCampaigns} />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center rounded-xl border border-dashed border-slate-300 dark:border-slate-800">
              <div className="mb-4 rounded-full bg-slate-100 p-3 dark:bg-slate-800">
                <svg
                  className="h-6 w-6 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                Sem resultados
              </h3>
              <p className="max-w-xs text-slate-500 dark:text-slate-400">
                Nenhuma campanha corresponde aos filtros selecionados. Tente
                ajustar os critérios de busca.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
