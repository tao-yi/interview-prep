/**
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
 0 1 2  3
[2,7,11,15], target = 9

i=0: (9-2=7) 判断map中是否保存了7的位置map[7], 如果有返回 [0, map[7]]，如果没有,保存map[2]=0
i=1: (9-7=2) 判断map中是否保存了2的位置map[2], 发现map[2]=0, 返回 [0,1]


{
  2:0,
  7:1
}

 */

function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map[res] !== undefined) {
      return [map[res], i];
    }
    map[nums[i]] = i;
  }
  return [];
}
