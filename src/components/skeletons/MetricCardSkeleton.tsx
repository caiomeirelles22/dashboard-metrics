export function MetricCardSkeleton() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 animate-pulse">
      <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />

      <div className="mt-4 h-8 w-32 rounded bg-slate-200 dark:bg-slate-800" />

      <div className="mt-4 flex items-center gap-2">
        <div className="h-4 w-12 rounded bg-slate-100 dark:bg-slate-800/50" />
        <div className="h-4 w-20 rounded bg-slate-100 dark:bg-slate-800/50" />
      </div>
    </div>
  );
}
