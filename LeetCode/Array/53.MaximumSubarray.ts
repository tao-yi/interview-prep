export class SlidingWindow {
  static maxSubArray(nums: number[]): number {
    let sum = nums[0];
    let max = sum;
    for (let i = 1; i < nums.length; i++) {
      if (sum < 0) sum = 0;
      sum += nums[i];
      max = Math.max(sum, max);
    }
    return max;
  }
}

/**
比如: [-2,1,3]
计算以每个元素为结尾的最大子数组

[-2] -> 只有一个元素-2
[-2,1]   -> 【从前一个子数组连续至1为结尾的子数组】= -1 当前元素1大于-1 -> 1
[-2,1,3] -> 【从前一个子数组连续至3为结尾的子数组】= 4  当前元素3小于4   -> 4

状态转移方程: 
取 Math.max(前一个元素为结尾的最大子序列 + 当前元素, 当前元素)

原理：以一个元素为结尾的最大子序列有两种可能
1. 当前元素
2. 以前一个元素为结尾的最大子序列加上当前元素

 */
export class DP {
  static maxSubArray(nums: number[]): number {
    const dp = [nums[0]];
    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
      max = Math.max(dp[i], max);
    }
    return max;
  }
}
