/**
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

 */
function reverse(nums: number[], l: number, r: number) {
  let tmp: number;
  while (l < r) {
    tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
    l++;
    r--;
  }
}

function rotate(nums: number[], k: number): void {
  if (k <= 0 || k === nums.length) return;
  if (k > nums.length) {
    k = k % nums.length;
  }
  // 从头至尾翻转 [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1]
  reverse(nums, 0, nums.length - 1);
  // 翻转 [7,6,5,4]
  reverse(nums, 0, k - 1);
  // 翻转 [4,3,2,1]
  reverse(nums, k, nums.length - 1);
}
