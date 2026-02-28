import { DashboardData } from "@/types/dashboard";
import dashboardData from "@/mocks/dashboard.json";

/**

 * * @returns {Promise<DashboardData>}
 */
export async function getDashboardData(): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return dashboardData as DashboardData;
}
