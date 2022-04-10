export function quickSort(nums: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }

  const pIndex = partition(nums, lo, hi);
  quickSort(nums, lo, pIndex - 1);
  quickSort(nums, pIndex + 1, hi);
}

function partition(nums: number[], lo: number, hi: number): number {
  const random = Math.floor(Math.random() * (hi - lo)) + lo;
  swap(nums, random, hi);
  const pivot = nums[hi];
  let pIndex = lo;
  for (let i = lo; i <= hi; i++) {
    // pIndex指向第一个比pivot大的数
    // 找到比pivot小的数，和pIndex交换
    // p
    // 5,6,0,1
    if (nums[i] < pivot) {
      swap(nums, i, pIndex);
      pIndex++;
    }
  }
  swap(nums, pIndex, hi);
  return pIndex;
}

function swap(nums: number[], i: number, j: number) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
