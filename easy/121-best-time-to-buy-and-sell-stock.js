// Time complexity: O(n^2)
// Space complexity: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit1 = (prices) => {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (maxProfit < profit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = (prices) => {
  let maxProfit = 0;
  let stockToBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (stockToBuy > prices[i]) {
      stockToBuy = prices[i];
    }
    const profit = prices[i] - stockToBuy;

    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};
