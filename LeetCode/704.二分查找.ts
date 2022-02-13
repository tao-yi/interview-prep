function BinarySearch(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length;

  while (r >= l) {
    let mid = ((r - l) >> 1) + l;
    console.log(l, r, mid);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) l = mid + 1;
    if (target < nums[mid]) r = mid - 1;
  }

  return -1;
}

const input = [-1, 0, 3, 5, 9, 12];
console.log(BinarySearch(input, 9));
