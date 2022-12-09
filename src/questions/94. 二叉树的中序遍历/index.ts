import { createTree } from '@utils/create';
import { TreeNode } from '@utils/interface';

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const stack: Array<{ tree: TreeNode; visited: boolean }> = [{ tree: root, visited: false }];
  const res: number[] = [];
  while (stack.length !== 0) {
    const current = stack.pop();
    const currentTree = current.tree;
    if (current.visited) {
      // 这个节点被拆分过, 那么直接取值即可
      res.push(currentTree.val);
    } else {
      // 当前节点尚未被拆分过, 执行拆分逻辑
      const leftTree = currentTree.left;
      const rightTree = currentTree.right;
      // #region 放入右子树
      if (rightTree) {
        stack.push({
          tree: rightTree,
          visited: false,
        });
      }
      // #endregion

      // #region 放入根节点
      current.visited = true;
      stack.push(current);
      // #endregion

      // #region 放入左子树
      if (leftTree) {
        stack.push({
          tree: leftTree,
          visited: false,
        });
      }
      // #endregion
    }
  }
  return res;
}

function test() {
  // const res = lengthOfLastWord('Hello World');
  const tree = createTree([1, null, 2, 3]);
  const res = inorderTraversal(tree);
  console.log(res);
}

export default test;
