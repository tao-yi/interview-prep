/**

n=0, f=0
n=1, f=1
n=2, f=1

 a b c d
[0,1,1,2]

   a b c d 
[0,1,1,2,4]

     a b c d
[0,1,1,2,3,6]

       a b c d
[0,1,1,2,3,5,10]

*/

function tribonacci(n: number): number {
  let a = 0;
  let b = 1;
  let c = 1;
  let d: number;
  if (n === 0) return 0;
  if (n <= 2) return 1;
  for (let i = 3; i <= n; i++) {
    d = a + b + c;
    a = b;
    b = c;
    c = d;
  }
  return d!;
}
