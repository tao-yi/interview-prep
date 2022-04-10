export function mergeSort(nums: number[], lo: number, hi: number): number[] {
  if (lo > hi) return [];
  if (lo === hi) return [nums[lo]];
  // partition
  const mid = lo + ((hi - lo) >> 1);
  const left = mergeSort(nums, lo, mid);
  const right = mergeSort(nums, mid + 1, hi);
  const sorted = new Array(left.length + right.length);
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sorted[k++] = left[i++];
    } else {
      sorted[k++] = right[j++];
    }
  }

  while (i < left.length) sorted[k++] = left[i++];
  while (j < right.length) sorted[k++] = right[j++];

  return sorted;
}
