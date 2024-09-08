export const getLatestPriceInfo = (commodity: any) => {
    const latestPrice = commodity.prices[commodity.prices.length - 1] || 0;
    const previousPrice = commodity.prices[commodity.prices.length - 2] || 0;
    const priceChange = latestPrice - previousPrice;
    const percentageChange = (priceChange / previousPrice) * 100;

    return {
        latestPrice,
        priceChange,
        percentageChange,
    };
};
