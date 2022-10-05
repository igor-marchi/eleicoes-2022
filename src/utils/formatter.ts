export function formatNumber(number: number) {
  return new Intl.NumberFormat("pt-BR", {}).format(number);
}

export function formatNumberCompact(number: number) {
  return new Intl.NumberFormat("pt-BR", { notation: "compact" }).format(number);
}
