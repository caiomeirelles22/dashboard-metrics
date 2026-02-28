import { formatCurrency, formatNumber, formatPercentage } from "@/lib/formatters";


describe("Formatters Utility", () => {
  describe("formatCurrency", () => {
    it("deve formatar valores numéricos para Real brasileiro (BRL)", () => {
      const result = formatCurrency(85200).replace(/\u00A0/g, " ");
      expect(result).toBe("R$ 85.200,00");

      const resultZero = formatCurrency(0).replace(/\u00A0/g, " ");
      expect(resultZero).toBe("R$ 0,00");
    });
  });

  describe("formatNumber", () => {
    it("deve formatar números com separador de milhar do Brasil", () => {
      expect(formatNumber(1248)).toBe("1.248");
      expect(formatNumber(1000000)).toBe("1.000.000");
    });
  });

  describe("formatPercentage", () => {
    it("deve formatar números para percentual com 1 casa decimal", () => {
      expect(formatPercentage(12.5)).toBe("12,5%");
      expect(formatPercentage(0)).toBe("0,0%");
    });

    it("deve incluir o sinal de positivo (+) para números maiores que zero quando solicitado", () => {
      expect(formatPercentage(8.2, { showSign: true })).toBe("+8,2%");
      expect(formatPercentage(-1.4, { showSign: true })).toBe("-1,4%");
      expect(formatPercentage(0, { showSign: true })).toBe("0,0%");
    });
  });
});
