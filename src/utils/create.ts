import { ListNode, TreeNode } from './interface';

/** 根据给定的数组, 生成链表 */
export function createListNode(arr: number[]): ListNode {
  let oldListNode: ListNode = null;
  for (let index = arr.length - 1; index > -1; index--) {
    const val = arr[index];
    const newListNode = new ListNode(val, oldListNode);
    oldListNode = newListNode;
  }
  return oldListNode;
}

/** 根据给定的数组, 还原为二叉树 */
export function createTree(arr: number[]): TreeNode {
  if (arr.length === 0 || arr[0] === null) {
    return;
  }
  const root = new TreeNode(arr[0]);
  const stack: Array<{ tree: TreeNode; setLeft: boolean; setRight: boolean }> = [{ tree: root, setLeft: false, setRight: false }];
  let point = 0;
  let currentTarget = stack[0];
  let currentTree = currentTarget.tree;
  while (point++ < arr.length - 1) {
    const value = arr[point];
    const isLeft = point % 2 !== 0;
    if (value !== null) {
      const newTree = new TreeNode(value);
      if (isLeft) {
        currentTree.left = newTree;
      } else {
        currentTree.right = newTree;
      }
      stack.push({ tree: newTree, setLeft: false, setRight: false });
    }
    if (isLeft) {
      currentTarget.setLeft = true;
    } else {
      currentTarget.setRight = true;
    }
    // #region 检查 stack 中的第一个树是否已经设置过左右结点, 如果是的话将其移除, 设置第二个元素为当前树
    if (currentTarget.setLeft && currentTarget.setRight) {
      stack.shift();
      currentTarget = stack[0];
      currentTree = currentTarget.tree;
    }
    // #endregion
  }
  return root;
}
