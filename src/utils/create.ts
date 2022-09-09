import { ListNode } from './interface';

export function createListNode(arr: number[]): ListNode {
  let listNode: ListNode = null;
  for (let index = arr.length - 1; index > -1; index--) {
    const element = arr[index];
    listNode = new ListNode(element, listNode);
  }
  return listNode;
}
