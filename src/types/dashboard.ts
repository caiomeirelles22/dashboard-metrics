
export type CampaignStatus = 'active' | 'paused';

export type Channel = 'googleAds' | 'facebookAds' | 'email' | 'instagram';

export interface Campaign {
  id: string;
  name: string;
  channel: Channel;
  status: CampaignStatus;
  investment: number;
}

export interface Metric {
  label: string;
  value: number;
  type: 'currency' | 'number' | 'percentage';
  change: number;
}

export interface DashboardData {
  metrics: Metric[];
  campaigns: Campaign[];
}