/**
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

思路：双指针i，j，和pos记录返回值数组中下一个存放元素的位置
分别从数组的两端比较i元素和j元素的平方
如果 i元素的平方更大，pos位置存放 i元素的平方
否则 pos位置存放j元素的平方
 */
function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = nums.length - 1;
  let pos = j;
  while (i <= j) {
    const ith = nums[i] * nums[i];
    const jth = nums[j] * nums[j];
    if (ith > jth) {
      result[pos] = ith;
      i++;
    } else {
      result[pos] = jth;
      j--;
    }
    pos--;
  }
  return result;
}
