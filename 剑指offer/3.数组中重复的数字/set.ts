/**
 * 方法一：利用一个set将已经找到的数字记录下来
 */
function findDuplicate(arr: number[]): number | undefined {
  const set = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    }
    set.add(arr[i]);
  }

  return undefined;
}

const arr = [2, 3, 1, 0, 2, 5, 3];

const output = findDuplicate(arr);
console.log(output);
