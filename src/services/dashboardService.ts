import { DashboardData } from "@/types/dashboard";
import dashboardData from "@/mocks/dashboard.json";


export async function getDashboardData(): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return dashboardData as DashboardData;
}
