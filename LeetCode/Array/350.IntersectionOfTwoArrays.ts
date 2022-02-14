/**
找出两个数组的交集

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

思路：通过一个map记录长的那个数组的每个元素和它们出现的次数

遍历短的数组，对每一个元素查找map中的count，如果count>0，将这个元素添加到返回值数组中
然后将count--，这样如果再次出现重复的元素，仍然要将它添加进返回值数组中

 */
function intersect(nums1: number[], nums2: number[]): number[] {
  let short: number[];
  let long: number[];
  if (nums1.length > nums2.length) {
    long = nums1;
    short = nums2;
  } else {
    short = nums1;
    long = nums2;
  }
  const map = {};
  const output = [];
  long.forEach((num) => {
    map[num] = (map[num] ?? 0) + 1;
  });
  short.forEach((num) => {
    if (!map[num]) {
      return;
    }
    map[num] = map[num] - 1;
    output.push(num);
  });
  return output;
}
