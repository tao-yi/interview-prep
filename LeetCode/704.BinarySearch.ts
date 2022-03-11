function helper(nums: number[], target: number): number {
  return searchInSpace(nums, 0, nums.length - 1, target);
}

function searchInSpace(
  nums: number[],
  left: number,
  right: number,
  target: number,
): number {
  if (left > right) return -1;
  const mid = (left + (right - left)) >> 1;
  console.log(left, right, mid);
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] < target) {
    return searchInSpace(nums, mid + 1, right, target);
  } else {
    return searchInSpace(nums, left, mid - 1, target);
  }
}

const t1 = [-1, 0, 3, 5, 9, 12];

helper(t1, 9);
