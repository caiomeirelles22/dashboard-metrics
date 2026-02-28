"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function DashboardFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentStatus = searchParams?.get("status") || "all";
  const currentChannel = searchParams?.get("channel") || "all";

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    if (router) {
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl border dark:bg-slate-900 dark:border-slate-800 shadow-sm">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="status-select"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
          >
            Estado
          </label>
          <select
            id="status-select"
            value={currentStatus}
            onChange={(e) => handleFilterChange("status", e.target.value)}
            className="h-10 w-40 rounded-lg border border-slate-200 bg-white dark:bg-slate-800 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 dark:border-slate-700 dark:text-slate-200 cursor-pointer transition-all"
          >
            <option value="all">Todos os Estados</option>
            <option value="active">Ativas</option>
            <option value="paused">Pausadas</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="channel-select"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
          >
            Canal
          </label>
          <select
            id="channel-select"
            value={currentChannel}
            onChange={(e) => handleFilterChange("channel", e.target.value)}
            className="h-10 w-40 rounded-lg border border-slate-200 bg-white dark:bg-slate-800 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 dark:border-slate-700 dark:text-slate-200 cursor-pointer transition-all"
          >
            <option value="all">Todos os Canais</option>
            <option value="googleAds">Google Ads</option>
            <option value="facebookAds">Facebook Ads</option>
            <option value="instagram">Instagram</option>
            <option value="email">E-mail</option>
          </select>
        </div>
      </div>

      {(currentStatus !== "all" || currentChannel !== "all") && (
        <button
          onClick={() => router && router.push(pathname)}
          className="text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors px-2 py-1"
        >
          Limpar Filtros
        </button>
      )}
    </div>
  );
}
