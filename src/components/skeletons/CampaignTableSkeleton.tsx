export function CampaignTableSkeleton() {
  return (
    <div className="rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden animate-pulse">
      <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-lg border border-slate-100 p-4 dark:border-slate-800"
          >
            <div className="flex justify-between">
              <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-5 w-16 rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="flex justify-between">
              <div className="h-3 w-20 rounded bg-slate-100 dark:bg-slate-800" />
              <div className="h-3 w-16 rounded bg-slate-100 dark:bg-slate-800" />
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="border-b bg-slate-50 p-4 dark:bg-slate-950/50 dark:border-slate-800">
          <div className="flex justify-between gap-4">
            <div className="h-4 w-1/4 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-1/6 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-1/6 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-1/6 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="p-4 flex justify-between gap-4">
              <div className="h-4 w-1/4 rounded bg-slate-100 dark:bg-slate-800/50" />
              <div className="h-4 w-1/6 rounded bg-slate-100 dark:bg-slate-800/50" />
              <div className="h-4 w-1/6 rounded bg-slate-100 dark:bg-slate-800/50" />
              <div className="h-4 w-1/6 rounded bg-slate-100 dark:bg-slate-800/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
