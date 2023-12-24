/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const list: number[] = [];
  const queue = [root];

  while (queue.length) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();

      // Only add the rightmost node value at each level
      // as the queue has all the values in a single level, eg: [2,3], [5,4] ...etc
      // so checking i is the last index of queue will return the right-most value
      if (i === queueLength - 1) {
        list.push(currentNode.val);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return list;
}
