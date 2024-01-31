// Challenge
// Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which will be a 2D matrix that contains only the integers 1, 0, or 2. Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you must move to reach an enemy which is represented by a 2. You are able to wrap around one side of the matrix to the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following:

// 0 0 0 0
// 1 0 0 0
// 0 0 0 2
// 0 0 0 2

// For this input your program should return 2 because the closest enemy (2) is 2 spaces away from the 1 by moving left to wrap to the other side and then moving down once. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.

// Sample Test Cases:

// Input:["000", "100", "200"]
// Output:1

// Input:["0000", "2010", "0000", "2002"]
// Output:2

function ClosestEnemyII(strArr) {
  // find the number of spaces from '1' to '2'
  // can wrap the other side (can overflow, out-of-bounds are acceptable)
  let player: [number, number] | null = null;
  const enemyArray: [number, number][] = [];

  // locate player and all enemies
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[0].length; j++) {
      if (strArr[i][j] === '1') {
        player = [i, j];
      } else if (strArr[i][j] === '2') {
        enemyArray.push([i, j]);
      }
    }
  }

  if (!player.length || enemyArray.length === 0) {
    return 0;
  }

  // default set as max, this will be updated in the iteraition
  let minDistance = Infinity;
  for (const enemyPosition of enemyArray) {
    // shortest row/horizontal distance
    // compare with normal difference and out-of-bounds difference
    const distanceX = Math.min(
      Math.abs(player[0] - enemyPosition[0]),
      strArr.length - Math.abs(player[0] - enemyPosition[0])
    );

    // the same goes for column/vertical distance
    const distanceY = Math.min(
      Math.abs(player[1] - enemyPosition[1]),
      strArr.length - Math.abs(player[1] - enemyPosition[1])
    );

    const distance = distanceX + distanceY;

    // console.log({distanceX, distanceY, distance});
    minDistance = Math.min(minDistance, distance);
  }
  // demo
  // 0 0 0
  // 1 0 0
  // 2 0 0
  return minDistance;
}

// keep this function call here
// @ts-ignore
console.log(ClosestEnemyII(readline()));
