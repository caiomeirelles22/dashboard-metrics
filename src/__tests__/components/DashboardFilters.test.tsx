import { render, screen, fireEvent } from "@testing-library/react";
import { DashboardFilters } from "../../components/dashboard/DashboardFilters";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("DashboardFilters Component", () => {
  const mockPush = jest.fn();
  const mockPathname = "/dashboard";

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue(mockPathname);
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams(""));
  });

  it("deve renderizar as opções de filtro corretamente", () => {
    render(<DashboardFilters />);

    expect(screen.getByLabelText(/Estado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Canal/i)).toBeInTheDocument();
    expect(screen.getByText("Todos os Estados")).toBeInTheDocument();
    expect(screen.getByText("Todos os Canais")).toBeInTheDocument();
  });

  it("deve chamar router.push com o novo parâmetro quando o estado for alterado", () => {
    render(<DashboardFilters />);

    const selectStatus = screen.getByLabelText(/Estado/i);
    fireEvent.change(selectStatus, { target: { value: "active" } });

    expect(mockPush).toHaveBeenCalledWith(`${mockPathname}?status=active`);
  });

  it("deve chamar router.push com múltiplos parâmetros quando o canal for alterado", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("status=active"),
    );

    render(<DashboardFilters />);

    const selectChannel = screen.getByLabelText(/Canal/i);
    fireEvent.change(selectChannel, { target: { value: "googleAds" } });

    expect(mockPush).toHaveBeenCalledWith(
      `${mockPathname}?status=active&channel=googleAds`,
    );
  });

  it("deve exibir o botão de limpar filtros apenas quando houver filtros ativos", () => {
    const { rerender } = render(<DashboardFilters />);
    expect(screen.queryByText("Limpar Filtros")).not.toBeInTheDocument();

    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("status=active"),
    );
    rerender(<DashboardFilters />);
    expect(screen.getByText("Limpar Filtros")).toBeInTheDocument();
  });

  it("deve resetar a URL ao clicar em limpar filtros", () => {
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("status=active&channel=email"),
    );

    render(<DashboardFilters />);

    const clearButton = screen.getByText("Limpar Filtros");
    fireEvent.click(clearButton);

    expect(mockPush).toHaveBeenCalledWith(mockPathname);
  });
});
