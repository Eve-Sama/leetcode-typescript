import { createTree } from '@utils/create';
import { TreeNode } from '@utils/interface';

function isValidBST(root: TreeNode | null): boolean {
  const stack: Array<{ tree: TreeNode; visited: boolean }> = [{ tree: root, visited: false }];
  const res: number[] = [];
  while (stack.length !== 0) {
    const currentTarget = stack.pop();
    const currentTree = currentTarget.tree;
    if (currentTarget.visited) {
      res.push(currentTarget.tree.val);
    } else {
      const left = currentTree.left;
      const right = currentTree.right;
      if (right) {
        stack.push({ tree: right, visited: false });
      }
      currentTarget.visited = true;
      stack.push(currentTarget);
      if (left) {
        stack.push({ tree: left, visited: false });
      }
    }
  }
  // 如果中序遍历是递增, 则为二叉搜索树
  let beingSearchTree = true;
  let pre = res[0];
  for (let index = 1; index < res.length; index++) {
    const cur = res[index];
    if (pre >= cur) {
      beingSearchTree = false;
      break;
    }
    pre = cur;
  }
  return beingSearchTree;
}

function test() {
  const tree = createTree([2, 2, 2]);
  // const tree = createTree([2, 1, 3]);
  const res = isValidBST(tree);
  console.log(res);
}

export default test;
