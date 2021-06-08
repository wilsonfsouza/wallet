export function formatAmount(amount: number): string {
    const formatedAmount = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);

    return formatedAmount;
}