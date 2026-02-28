import { getDashboardData } from "../../services/dashboardService";
import { MetricCard } from "./MetricCard";
import { CampaignTable } from "./CampaignTable";
import { InvestmentChart } from "./InvestmentChart";

type Filters = { status?: string; channel?: string };

export async function DashboardContent({
  filters,
}: {
  filters: Filters;
}) {
  const data = await getDashboardData();

  const filteredCampaigns = data.campaigns.filter((campaign) => {
    const matchStatus =
      !filters.status || filters.status === "all" || campaign.status === filters.status;
    const matchChannel =
      !filters.channel || filters.channel === "all" || campaign.channel === filters.channel;
    return matchStatus && matchChannel;
  });

  return (
    <div className="space-y-8">
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

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-1">
          <InvestmentChart campaigns={filteredCampaigns} />
        </section>

        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Lista de Campanhas
            </h2>
            <div className="rounded-md bg-slate-200/50 px-2 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {filteredCampaigns.length} resultados
            </div>
          </div>

          {filteredCampaigns.length > 0 ? (
            <CampaignTable campaigns={filteredCampaigns} />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
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
                    d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                Nenhum dado encontrado
              </h3>
              <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
                Experimente ajustar os filtros de estado ou canal para
                visualizar outras campanhas.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

