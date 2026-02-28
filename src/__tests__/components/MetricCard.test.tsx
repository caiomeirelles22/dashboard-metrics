import { render, screen } from "@testing-library/react";
import { MetricCard } from "@/components/dashboard/MetricCard";

describe("MetricCard Component", () => {
  it("deve renderizar o título e o valor formatado corretamente para moeda", () => {
    render(
      <MetricCard
        title="Receita Mensal"
        value={85200}
        type="currency"
        change={8.2}
      />
    );

    expect(screen.getByText("Receita Mensal")).toBeInTheDocument();
    expect(screen.getByText(/R\$\s*85\.200,00/)).toBeInTheDocument();
    expect(screen.getByText("+8,2%")).toBeInTheDocument();
  });

  it("deve exibir indicador verde e seta para cima quando a variação for positiva", () => {
    render(
      <MetricCard
        title="Total de Clientes"
        value={1248}
        type="number"
        change={12.5}
      />
    );

    expect(screen.getByTestId("icon-up")).toBeInTheDocument();
    expect(screen.getByText("+12,5%")).toHaveClass("text-emerald-500");
  });

  it("deve exibir indicador vermelho e seta para baixo quando a variação for negativa", () => {
    render(
      <MetricCard
        title="Taxa de Conversão"
        value={3.4}
        type="percentage"
        change={-1.4}
      />
    );

    expect(screen.getByTestId("icon-down")).toBeInTheDocument();
    expect(screen.getByText("-1,4%")).toHaveClass("text-rose-500");
  });
});