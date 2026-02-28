import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { InvestmentChart } from "../../components/dashboard/InvestmentChart";
import { Campaign } from "../../types/dashboard";

interface MockProps {
  children?:
    | ReactNode
    | ((props: { width: number; height: number }) => ReactNode);
  data?: Array<Record<string, unknown>>;
  dataKey?: string;
  [key: string]: unknown;
}

jest.mock("recharts", () => {
  const ReactActual = jest.requireActual("react");
  const originalModule = jest.requireActual("recharts");

  return {
    ...originalModule,
    ResponsiveContainer: ({ children }: MockProps) => (
      <div data-testid="responsive-container">
        {typeof children === "function"
          ? (
              children as (props: {
                width: number;
                height: number;
              }) => ReactNode
            )({ width: 800, height: 300 })
          : children}
      </div>
    ),
    BarChart: ({ children, data }: MockProps) => (
      <div data-testid="bar-chart">
        {typeof children !== "function" &&
          ReactActual.Children.map(children, (child: ReactNode) => {
            if (ReactActual.isValidElement(child)) {
              return ReactActual.cloneElement(child, { data } as Record<
                string,
                unknown
              >);
            }
            return child;
          })}
      </div>
    ),
    XAxis: ({ dataKey, data }: MockProps) => {
      if (!data || !dataKey || typeof dataKey !== "string") return null;
      return (
        <div data-testid="x-axis">
          {data.map((entry, index) => (
            <span key={`tick-${index}`}>{String(entry[dataKey])}</span>
          ))}
        </div>
      );
    },
    Bar: (props: MockProps) => (
      <div data-testid="bar">{props.dataKey as string}</div>
    ),
    Rectangle: () => <div data-testid="rectangle" />,
  };
});

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Ads Google Test",
    channel: "googleAds",
    status: "active",
    investment: 1000,
  },
  {
    id: "2",
    name: "Ads Instagram Test",
    channel: "instagram",
    status: "active",
    investment: 500,
  },
];

describe("InvestmentChart Component", () => {
  it("deve renderizar o título e a descrição do gráfico corretamente", () => {
    render(<InvestmentChart campaigns={mockCampaigns} />);

    expect(screen.getByText("Investimento por Canal")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Distribuição financeira total baseada nos critérios aplicados/i,
      ),
    ).toBeInTheDocument();
  });

  it("deve exibir o estado vazio (empty state) quando não houver campanhas", () => {
    render(<InvestmentChart campaigns={[]} />);

    expect(
      screen.getByText(
        "Sem dados de investimento para os filtros selecionados.",
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar os nomes dos canais traduzidos no gráfico", () => {
    render(<InvestmentChart campaigns={mockCampaigns} />);
    expect(screen.getByText(/Google Ads/i)).toBeInTheDocument();
    expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
  });
});
