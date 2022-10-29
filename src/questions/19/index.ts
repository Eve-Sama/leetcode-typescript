import { ListNode } from '@utils/interface';
import { createListNode } from '@utils//create';

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   const listNodeList: ListNode[] = [];
//   while (head) {
//     listNodeList.push(head);
//     head = head.next;
//   }
//   listNodeList.splice(listNodeList.length - n, 1);
//   listNodeList.forEach(v => (v.next = null));
//   if (listNodeList.length === 0) {
//     return null;
//   }
//   let currentListNode = listNodeList[0];
//   let headListNode = currentListNode;
//   for (let index = 1; index < listNodeList.length; index++) {
//     const element = listNodeList[index];
//     currentListNode.next = element;
//     currentListNode = currentListNode.next;
//   }
//   return headListNode;
// }
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const mainListNode = new ListNode(0);
  mainListNode.next = head;
  let tempListNode = mainListNode;
  let first = mainListNode;
  let second = mainListNode;
  let preListNode: ListNode;
  while (n !== 0) {
    first = tempListNode.next;
    tempListNode = tempListNode.next;
    n--;
  }
  while (first) {
    preListNode = second;
    second = second.next;
    first = first.next;
  }
  console.log(first, `first`);
  console.log(second, `second`);
  console.log(preListNode, `preListNode`);
  preListNode.next = second.next;
  return mainListNode.next;
}
function test() {
  const listNode = createListNode([1, 2]);
  const res = removeNthFromEnd(listNode, 1);
  // const listNode = createListNode([1, 2, 3, 4, 5]);
  // const res = removeNthFromEnd(listNode, 2);
  console.log(res);
}

export default test;
