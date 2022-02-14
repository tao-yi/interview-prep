/**
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

0 f(0)  -> 0
1 f(1)  -> 1 
2 f(2)  -> 1,1     or 2
3 f(3)  -> 1,1,1   or 2,1    or 1,2
5 f(4)  -> 1,1,1,1 or 2,1,1  or 1,2,1 or 2,2 or 1,1,2

f(n) = f(n-1) + f(n-2) 
 */
function climbStairs(n: number): number {
  // return climbStairs(n-1) + climbStairs(n-2)
  if (n <= 2) return n;
  let a = 1;
  let b = 2;
  let tmp;
  for (let i = 3; i <= n; i++) {
    tmp = a;
    a = b;
    b = tmp + b;
  }
  return b;
}
