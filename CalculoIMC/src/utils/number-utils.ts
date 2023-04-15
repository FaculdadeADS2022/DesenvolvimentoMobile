export const formatNumber = (value: number): string => {
  const fmt = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 1, 
      maximumFractionDigits: 1,
      minimumIntegerDigits: 1
    })
    return fmt.format(value)
}