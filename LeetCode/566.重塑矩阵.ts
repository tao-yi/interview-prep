/**
将一个矩阵重塑，r表示行数，c表示列数

输入：mat = [[1,2],[3,4]], r = 1, c = 4
输出：[[1,2,3,4]]

i=0,j=0 col=0 row=0 arr[0][0]=1
i=0,j=1 col=1 row=0 arr[0][1]=2 
i=0,j=2 col=2 row=0 arr[0][2]=3
i=0,j=3 col=3 row=0 arr[0][3]=4
 */
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c !== mat.length * mat[0].length) return mat;
  const array = new Array(r);
  let row = 0;
  let col = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (col >= c) {
        col = 0;
        row++;
      }
      if (!array[row]) {
        array[row] = [];
      }
      array[row][col] = mat[i][j];
      col++;
    }
  }
  return array;
}
