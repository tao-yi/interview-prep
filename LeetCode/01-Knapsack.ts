/**
背包问题
 */

class Knapsack {
  // 01背包问题
  // val物品的价值
  // wt物品的重量
  // W背包的承重
  static zeroOneKnapsack(val: number[], wt: number[], W: number) {
    // dp[i][w]表示考虑前i个物品并且背包承重为w可获得的最大价值
    const dp = new Array(val.length + 1);
    for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(W + 1).fill(0);
    }

    for (let i = 1; i <= val.length; i++) {
      for (let w = 1; w <= W; w++) {
        if (w - wt[i - 1] >= 0) {
          dp[i][w] = Math.max(
            dp[i - 1][w - wt[i - 1]] + val[i - 1],
            dp[i - 1][w],
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    return dp[val.length][W];
  }
}

/**
val = [4, 2, 3];
wt = [2, 1, 3];

dp=[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 4, 4, 4 ],
  [ 0, 2, 4, 6, 6 ],
  [ 0, 2, 4, 6, 6 ]
]
 */
console.log(Knapsack.zeroOneKnapsack([4, 2, 3], [2, 1, 3], 4));
