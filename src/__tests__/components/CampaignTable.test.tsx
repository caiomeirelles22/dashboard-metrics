import { render, screen } from "@testing-library/react";
import { CampaignTable } from "@/components/dashboard/CampaignTable";
import { Campaign } from "@/types/dashboard";

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Campanha de Teste 1",
    channel: "googleAds",
    status: "active",
    investment: 1500,
  },
  {
    id: "2",
    name: "Campanha de Teste 2",
    channel: "instagram",
    status: "paused",
    investment: 300,
  },
];

describe("CampaignTable Component", () => {
  it("deve renderizar os cabeçalhos corretamente (versão desktop)", () => {
    render(<CampaignTable campaigns={mockCampaigns} />);

    expect(screen.getByText("Campanha")).toBeInTheDocument();
    expect(screen.getByText("Canal")).toBeInTheDocument();
    expect(screen.getByText("Estado")).toBeInTheDocument();
    expect(screen.getByText("Investimento")).toBeInTheDocument();
  });

  it("deve renderizar os dados das campanhas formatados corretamente em ambos os layouts", () => {
    render(<CampaignTable campaigns={mockCampaigns} />);

    expect(screen.getAllByText("Campanha de Teste 1")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Google Ads")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Ativa")[0]).toBeInTheDocument();

    expect(screen.getAllByText("Campanha de Teste 2")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Instagram")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Pausada")[0]).toBeInTheDocument();
  });

  it("deve formatar o investimento como moeda BRL", () => {
    render(<CampaignTable campaigns={mockCampaigns} />);

    expect(screen.getAllByText(/R\$\s*1\.500,00/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/R\$\s*300,00/)[0]).toBeInTheDocument();
  });
});
