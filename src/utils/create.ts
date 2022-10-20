import { ListNode } from './interface';

export function createListNode(arr: number[]): ListNode {
  let oldListNode: ListNode = null;
  for (let index = arr.length - 1; index > -1; index--) {
    const val = arr[index];
    const newListNode = new ListNode(val, oldListNode);
    oldListNode = newListNode;
  }
  return oldListNode;
}
