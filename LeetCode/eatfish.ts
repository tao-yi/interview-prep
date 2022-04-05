/**
 * 大鱼吃小鱼
 * 有N条鱼，每一轮，左边的大鱼一定会吃掉右边比自己的小的第一条鱼
 * 多少轮后，鱼的数量会稳定?
 */

/*
input=[6,5,1,2,3]
从右往左,如果当前数字比栈顶元素小，入栈，否则出栈

*/
function EatFish(fish: number[]): number {
  let res = 0;
  // 维持一个单调递减的栈
  const stack: Array<number[]> = [];
  for (let i = fish.length - 1; i >= 0; i--) {
    // 记录鱼的大小和吃右边鱼的次数
    const record = [fish[i], 0];
    while (stack.length && fish[i] > stack[stack.length - 1][0]) {
      // 鱼的大小 和 吃右边鱼的次数
      const [_, eatCount] = stack.pop()!;
      // 如果当前的这条鱼比栈顶的🐟更大，就可以吃掉栈顶的鱼
      record[1] = Math.max(record[1] + 1, eatCount);
      res = record[1];
    }
    // 如果fish[i]比栈顶小，入栈等待发现一个更大的鱼来吃
    stack.push(record);
  }

  return res;
}

console.log(EatFish([6, 6, 3, 3]));
console.log(EatFish([6, 7, 1, 3, 2, 4]));
console.log(EatFish([6, 5, 1, 2, 3]));
