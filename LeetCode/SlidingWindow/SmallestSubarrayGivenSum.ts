class SmallestSubarrayGivenSum {
  static smallestSubarray(arr: number[], targetSum: number) {
    let minWindowSize = Number.POSITIVE_INFINITY;
    let windowStart = 0;
    let currentWindowSum = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      currentWindowSum += arr[windowEnd];
      while (currentWindowSum >= targetSum) {
        minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
        currentWindowSum -= arr[windowStart]; // remove first item in the window
        windowStart++; // shrink the window
      }
    }

    return minWindowSize;
  }
}

const a = [4, 2, 2, 7, 8, 1, 2, 8, 10];
console.log(SmallestSubarrayGivenSum.smallestSubarray(a, 8));
