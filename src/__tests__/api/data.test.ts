import { GET } from "@/app/api/data/route";
import { DashboardData } from "@/types/dashboard";

describe("API /api/data", () => {
  it("deve retornar os dados do dashboard com a estrutura correta", async () => {
    const response = await GET();
    const data: DashboardData = await response.json();

    expect(response.status).toBe(200);

    expect(data.metrics).toHaveLength(3);
    expect(data.metrics[0]).toHaveProperty("label");
    expect(data.metrics[0]).toHaveProperty("type");

    expect(data.campaigns.length).toBeGreaterThanOrEqual(10);
    expect(data.campaigns.length).toBeLessThanOrEqual(15);

    const firstCampaign = data.campaigns[0];
    expect(firstCampaign).toHaveProperty("name");
    expect(firstCampaign).toHaveProperty("channel");
    expect(firstCampaign).toHaveProperty("status");
    expect(["active", "paused"]).toContain(firstCampaign.status);
  });
});
