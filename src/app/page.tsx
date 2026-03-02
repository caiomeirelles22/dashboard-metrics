import { Suspense } from "react";
import { DashboardFilters } from "../components/dashboard/DashboardFilters";

import { BarChart3, ListFilter } from "lucide-react";
import DashboardSkeletons from "@/components/skeletons/DashboardSkeletons";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { ThemeToggle } from "@/components/ThemeToggle";

interface PageProps {
  searchParams: Promise<{
    status?: string;
    channel?: string;
  }>;
}

export const revalidate = 1800; //30 min.

export default async function Home({ searchParams }: PageProps) {
  const filters = await searchParams;

  const suspenseKey = `${filters.status || "all"}-${filters.channel || "all"}`;

  return (
    <main className="min-h-screen bg-slate-50 p-4 dark:bg-slate-950 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <BarChart3 size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Métricas de Marketing B2B
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Performance Analytics
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Visualize o desempenho e a alocação de investimento das suas
            campanhas.
          </p>
          <ThemeToggle />
        </header>

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <ListFilter size={18} />
            <h2 className="text-lg font-bold">Filtros de Segmentação</h2>
          </div>
          <DashboardFilters />
        </section>

        <Suspense key={suspenseKey} fallback={<DashboardSkeletons />}>
          <DashboardContent filters={filters} />
        </Suspense>
      </div>
    </main>
  );
}
