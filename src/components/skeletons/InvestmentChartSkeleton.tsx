export function InvestmentChartSkeleton() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 animate-pulse">
      <div className="mb-6 space-y-2">
        <div className="h-6 w-48 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-64 rounded bg-slate-100 dark:bg-slate-800/50" />
      </div>

      <div className="flex h-72 w-full items-end justify-around gap-4 pt-4">
        <div className="h-[60%] w-12 rounded-t bg-slate-100 dark:bg-slate-800" />
        <div className="h-[85%] w-12 rounded-t bg-slate-100 dark:bg-slate-800" />
        <div className="h-[45%] w-12 rounded-t bg-slate-100 dark:bg-slate-800" />
        <div className="h-[70%] w-12 rounded-t bg-slate-100 dark:bg-slate-800" />
      </div>

      <div className="mt-4 flex justify-around border-t border-slate-100 pt-4 dark:border-slate-800">
        <div className="h-3 w-16 rounded bg-slate-100 dark:bg-slate-800" />
        <div className="h-3 w-16 rounded bg-slate-100 dark:bg-slate-800" />
        <div className="h-3 w-16 rounded bg-slate-100 dark:bg-slate-800" />
        <div className="h-3 w-16 rounded bg-slate-100 dark:bg-slate-800" />
      </div>
    </div>
  );
}
