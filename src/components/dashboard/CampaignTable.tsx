import { Campaign, CampaignStatus } from "@/types/dashboard";
import { formatCurrency } from "@/lib/formatters";
import { cn } from "@/lib/utils";

interface CampaignTableProps {
  campaigns: Campaign[];
}

const channelLabels: Record<string, string> = {
  googleAds: "Google Ads",
  facebookAds: "Facebook Ads",
  instagram: "Instagram",
  email: "E-mail",
};

function StatusBadge({ status }: { status: CampaignStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        status === "active"
          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400"
          : "bg-slate-100 text-slate-800 dark:bg-slate-500/10 dark:text-slate-400",
      )}
    >
      {status === "active" ? "Ativa" : "Pausada"}
    </span>
  );
}

export function CampaignTable({ campaigns }: CampaignTableProps) {
  return (
    <div className="rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
      <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
        {campaigns.map((campaign) => (
          <div
            key={`mobile-${campaign.id}`}
            className="flex flex-col gap-3 rounded-lg border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/20"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {campaign.name}
              </span>
              <StatusBadge status={campaign.status} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500 dark:text-slate-400">
                {channelLabels[campaign.channel] || campaign.channel}
              </span>
              <span className="font-medium text-slate-900 dark:text-slate-100">
                {formatCurrency(campaign.investment)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
          <thead className="border-b bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-950/50">
            <tr>
              <th className="px-6 py-4 font-medium">Campanha</th>
              <th className="px-6 py-4 font-medium">Canal</th>
              <th className="px-6 py-4 font-medium">Estado</th>
              <th className="px-6 py-4 font-medium text-right">Investimento</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {campaigns.map((campaign) => (
              <tr
                key={`desktop-${campaign.id}`}
                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                  {campaign.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {channelLabels[campaign.channel] || campaign.channel}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={campaign.status} />
                </td>
                <td className="px-6 py-4 text-right font-medium whitespace-nowrap">
                  {formatCurrency(campaign.investment)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
