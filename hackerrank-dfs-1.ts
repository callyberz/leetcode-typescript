function BitmapHoles(strArr: string[]): number {
  // perfrom DFS to find the contiguous 0s in the matrix
  const rowCount: number = strArr.length;
  const cols: number = strArr[0].length;
  let visited: boolean[][] = Array.from({ length: rowCount }, () =>
    Array(cols).fill(false)
  );
  let holeCount: number = 0;

  const dfs = (row: number, col: number): void => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rowCount ||
      col >= cols ||
      strArr[row][col] === '1' ||
      visited[row][col]
    ) {
      return;
    }
    visited[row][col] = true;
    dfs(row + 1, col); // down
    dfs(row - 1, col); // up
    dfs(row, col + 1); // right
    dfs(row, col - 1); // left
  };

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && strArr[i][j] === '0') {
        holeCount++;
        dfs(i, j);
      }
    }
  }

  return holeCount;
}

// function BitmapHoles(strArr: string[][]): number {
//   const rows: number = strArr.length;
//   if (rows === 0) {
//     return 0;
//   }
//   const cols: number = strArr[0].length;

//   let numberOfHoles: number = 0;
//   for (let i = 0; i < rows; ++i) {
//     for (let j = 0; j < cols; ++j) {
//       if (strArr[i][j] === '0') {
//         markCurrentHole(strArr, i, j, rows, cols);
//         numberOfHoles += 1;
//       }
//     }
//   }

//   return numberOfHoles;
// }

// // deprecated as recursive call results in max call stack exceeded
// // handle out-of-bounds, base case, cell with '1', visited celss
// function markCurrentHole(
//   matrix: string[][],
//   x: number,
//   y: number,
//   r: number,
//   c: number,
// ) {
//   if (x < 0 || x >= r || y < 0 || y >= c || matrix[x][y] !== '0') {
//     return;
//   }

//   // mark current cell as visited
//   matrix[x][y] = 'x';

//   markCurrentHole(matrix, x + 1, y, r, c);
//   markCurrentHole(matrix, x, y + 1, r, c);
//   markCurrentHole(matrix, x - 1, y, r , c);
//   markCurrentHole(matrix, x, y - 1, r, c);
// }

// keep this function call here
// @ts-ignore
console.log(BitmapHoles(readline()));
