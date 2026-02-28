export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("pt-BR").format(value);
}

/**

 * @param value 
 * @param options 
 */
export function formatPercentage(
  value: number,
  options?: { showSign?: boolean },
): string {
  const formatted = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);

  if (options?.showSign && value > 0) {
    return `+${formatted}%`;
  }

  return `${formatted}%`;
}
