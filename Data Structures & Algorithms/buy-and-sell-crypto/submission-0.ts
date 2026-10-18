class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buyAt: number = 0
        let profit: number = 0

        for(let i =1; i< prices.length; i++){
            const currentProfit: number = prices[i] - prices[buyAt]
            if(prices[i] < prices[buyAt]){
                buyAt = i
            }

            if(i > buyAt && currentProfit > profit){
                profit = currentProfit
            }
        }

        return profit
    }
}
