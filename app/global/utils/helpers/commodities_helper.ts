import { Commodity } from "../../types/commodity";


  function getPriceChange(previousPrice: number, latestPrice: number): number {
    return latestPrice - previousPrice;
  }
  
  function getPercentageChange(previousPrice: number, latestPrice: number): number {
    if (previousPrice === 0) {
      return 0;
    }
    return ((latestPrice - previousPrice) / previousPrice) * 100;
  }
  
  export const getLatestPriceInfo =(data: Commodity)=> {
    const sortedPrices = [...data.CommodityPrice].sort(
      (a, b) => new Date(b.referenceDate).getTime() - new Date(a.referenceDate).getTime()
    );
  
    if (sortedPrices.length < 2) {
      return {
        latestPrice: 0,
        previousPrice: 0,
        priceChange:0,
        percentageChange:0
      };
    }
  
    const latestCommodity = sortedPrices[0];
    const previousCommodity = sortedPrices[1];
  
    const priceChange = getPriceChange(previousCommodity.price, latestCommodity.price);
    const percentageChange = getPercentageChange(previousCommodity.price, latestCommodity.price);
  
    return {
      latestPrice: latestCommodity.price,
      previousPrice: previousCommodity.price,
      priceChange,
      percentageChange
    };
  }
  
