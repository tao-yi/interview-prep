/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

输入: nums = [0]
输出: [0]

方法：双指针
let i = 0
let j = i + 1
从头两个元素开始遍历，直到j >= nums.length
如果i元素不等于0, i++, j++
否则判断j元素是否等于0
    如果j元素不等于0，交换i元素和j元素
    如果j元素等于0,j++

 */

function swap(nums: number[], i: number, j: number) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] !== 0) {
      i++;
      j++;
      continue;
    }
    if (nums[j] === 0) {
      j++;
    } else {
      swap(nums, i, j);
      i++;
      j++;
    }
  }
}
