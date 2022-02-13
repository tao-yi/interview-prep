/**
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 2
Output: 1

Input: nums = [1,3,5,6], target = 7
Output: 4


tips:
1. 用二分法缩小查找空间
2. 如何确定插入下一个元素的位置

 */

function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length;
  let mid: number;
  while (l <= r) {
    mid = l + ((r - l) >> 1);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  // 此时mid == l == r 或者 mid = l = r - 1
  // 如果target更大，插入在mid后面
  if (target > nums[mid!]) return mid! + 1;
  // 否则插入在mid位置
  return mid!;
}
