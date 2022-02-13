/**

n=0, f=0
n=1, f=1
n=2, f=1

 a b c
[0,1,1]

   a b c 
[0,1,1,2]

     a b c 
[0,1,1,2,3]

       a b c
[0,1,1,2,3,5]

*/

function fib(n: number): number {
  if (n === 1 || n === 0) return n;
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
