import { createTree } from '@utils/create';
import { TreeNode } from '@utils/interface';

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
  const res: number[][] = [];
  queries.forEach(searchValue => {
    let min = -1;
    let max = -1;
    let minCurrentNode = root;
    let maxCurrentNode = root;
    while (minCurrentNode) {
      const value = minCurrentNode.val;
      if (value === searchValue) {
        min = value;
        minCurrentNode = null;
      } else {
        if (value < searchValue) {
          min = value;
          minCurrentNode = minCurrentNode.right;
        } else {
          minCurrentNode = minCurrentNode.left;
        }
      }
    }
    while (maxCurrentNode) {
      const value = maxCurrentNode.val;
      if (value === searchValue) {
        max = value;
        maxCurrentNode = null;
      } else {
        if (value > searchValue) {
          max = value;
          maxCurrentNode = maxCurrentNode.left;
        } else {
          maxCurrentNode = maxCurrentNode.right;
        }
      }
    }
    res.push([min, max]);
  });
  return res;
}

function test() {
  const tree = createTree([16, 8, 18, 1, 12, null, 20, null, 2, 9, null, null, null, null, 7]);
  console.log(tree, `tree`);
  const res = closestNodes(tree, [8, 14, 285508, 6]);
  // const tree = createTree([6, 2, 13, 1, 4, 9, 15, null, null, null, null, null, null, 14]);
  // const res = closestNodes(tree, [2, 5, 16]);
  console.log(res, `res`);
}

export default test;
