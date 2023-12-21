// https://leetcode.com/problems/shortest-path-in-binary-matrix/
// 8 directions BFS (iteration)

function shortestPathBinaryMatrix(grid: number[][]): number {
  const ROWS = grid.length;
  const COLS = grid[0].length;

  if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) {
    return -1; // Invalid start or end point
  }

  const queue = [[0, 0]];
  const visited = new Set(['0,0']);
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1]
  ];

  let length = 1;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const [r, c] = queue.shift() || [];

      if (r === ROWS - 1 && c === COLS - 1) {
        return length;
      }

      //   directions.forEach(([dr, dc]) => {
      for (const [dr, dc] of directions) {
        const newRow = r + dr;
        const newCol = c + dc;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < ROWS &&
          newCol < COLS &&
          grid[newRow][newCol] === 0 &&
          !visited.has(`${newRow},${newCol}`)
        ) {
          visited.add(`${newRow},${newCol}`);
          queue.push([newRow, newCol]);
        }
      }
    }
    length++;
  }

  return -1;
}
