// DFS/BFS: 200. Number of Islands
// DFS (recursion): explores as far as possible along each branch before backtracking
// This behavior aligns well with recursive calls, as it traverses deeply into the graph or tree structure before backtracking to explore other branches.

// BFS (iteration) with a queue: explores all the neighbors of a node before moving on to their respective neighbors.
// This behavior naturally fits an iterative approach where nodes are processed level by level, using a queue to maintain the order of traversal.

//BFS way to solve this
const bfs = (grid, r, c) => {
  const [ROWS, COLS] = [grid.length, grid[0].length];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  let queue = [[r, c]];

  //marks as visited
  grid[r][c] = '0';

  while (queue.length > 0) {
    //dequeues the first element(current)
    let [cr, cc] = queue.shift() || [];

    // we are checking all the 4 directions
    // and if it is valid we are pushing it to the queue and also marking it as visited (set to 0)
    // here valid means it is not visited and it is not 0
    directions.forEach(([dr, dc]) => {
      let [nr, nc] = [cr + dr, cc + dc];
      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < ROWS &&
        nc < COLS &&
        grid[nr][nc] === '1'
        // !(
        //     nr < 0 ||
        //     nc < 0 ||
        //     nr >= ROWS ||
        //     nc >= COLS ||
        //     grid[nr][nc] === '0'
        // )
      ) {
        queue.push([nr, nc]);
        grid[nr][nc] = '0';
      }
    });
  }
};

function numIslands(grid: string[][]): number {
  const [ROWS, COLS] = [grid.length, grid[0].length];

  let islands = 0;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === '1') {
        bfs(grid, i, j);
        islands++;
      }
    }
  }

  return islands;
}

// DFS way to solve this
function markCurrentIsland(
  matrix: string[][],
  x: number,
  y: number,
  r: number,
  c: number
): void {
  if (x < 0 || x >= r || y < 0 || y >= c || matrix[x][y] !== '1') {
    return; // Boundary case for matrix or if cell is not part of an island
  }

  // Mark current cell as visited
  matrix[x][y] = '2';

  // Make recursive call in all 4 adjacent directions
  markCurrentIsland(matrix, x + 1, y, r, c); // DOWN
  markCurrentIsland(matrix, x, y + 1, r, c); // RIGHT
  markCurrentIsland(matrix, x - 1, y, r, c); // TOP
  markCurrentIsland(matrix, x, y - 1, r, c); // LEFT
}

function numIslands_DFS(grid: string[][]): number {
  const rows: number = grid.length;
  if (rows === 0) {
    return 0; // Empty grid boundary case
  }
  const cols: number = grid[0].length;

  // Iterate for all cells of the array
  let noOfIslands: number = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === '1') {
        markCurrentIsland(grid, i, j, rows, cols);
        noOfIslands += 1;
      }
    }
  }
  return noOfIslands;
}
