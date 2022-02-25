/**
Find the max sum subarray of a fixed size k

hint: the window size is fixed

Example input:
[4,2,1,7,8,1,2,8,1,0]
 */

class MaxSumSubarray {
  public static findMaxSumSubarray(input: number[], k: number) {
    let max = -Number.MAX_VALUE;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      sum += input[i];
      if (i >= k - 1) {
        // has at least k element
        max = Math.max(max, sum);
        sum -= input[i - k + 1];
      }
    }
    return max;
  }
}

console.log(
  MaxSumSubarray.findMaxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3),
);
