import { createTree } from '@utils/create';
import { TreeNode } from '@utils/interface';

function serialize(root: TreeNode | null): string {
  if (!root) {
    return '';
  }
  let queue: any[] = [root];
  const res: any[] = [];
  while (queue.length) {
    const tempQueue: any[] = [];
    queue.forEach(v => {
      if (v === 'x') {
        res.push(v);
      } else {
        res.push(v.val);
        const left = v.left || 'x';
        const right = v.right || 'x';
        tempQueue.push(left);
        tempQueue.push(right);
      }
    });
    queue = tempQueue;
  }
  return res.join('|');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data.length === 0) {
    return null;
  }
  let originList: any[] = data.split('|');
  originList = originList.map(v => parseFloat(v) || v);
  if (originList.length === 0 || originList[0] === null) {
    return null;
  }
  const root = new TreeNode(originList[0]);
  const stack: Array<{ tree: TreeNode; setLeft: boolean; setRight: boolean }> = [{ tree: root, setLeft: false, setRight: false }];
  let currentTarget = stack[0];
  let currentTree = currentTarget.tree;
  for (let index = 1; index < originList.length - 1; index++) {
    const value = originList[index];
    const isLeft = index % 2 !== 0;
    if (value !== 'x') {
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
    if (currentTarget.setLeft && currentTarget.setRight) {
      stack.shift();
      currentTarget = stack[0];
      currentTree = currentTarget.tree;
    }
  }
  return root;
}

function test() {
  // const tree = createTree([]);
  // const text = serialize(tree);
  const tree = createTree([1, 2, 3, null, null, 4, 5]);
  const text = serialize(tree);
  const before = deserialize(text);
  console.log(text, `text`);
  console.log(before, `before`);
}

export default test;
