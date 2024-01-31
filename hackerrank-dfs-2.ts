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
