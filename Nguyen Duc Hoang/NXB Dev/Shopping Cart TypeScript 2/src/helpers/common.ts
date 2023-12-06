export const formatCurrency = (amount: number): string => {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}
