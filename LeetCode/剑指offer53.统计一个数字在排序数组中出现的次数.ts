/**
统计一个数字在排序数组中出现的次数。
示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 */
function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  let count = 0;
  let mid: number;
  while (l < r) {
    mid = l + ((r - l) >> 1);
    if (target <= nums[mid]) r = mid;
    else l = mid + 1;
  }

  while (l < nums.length && nums[l++] === target) count++;

  return count;
}
