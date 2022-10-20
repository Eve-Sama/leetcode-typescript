import { ListNode } from '../../utils/interface';
import { createListNode } from '../../utils/create';

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  const arr: ListNode[] = [head];
  while (head.next) {
    arr.push(head.next);
    head = head.next;
  }
  let tempListNode: ListNode;
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    const previous = index === 0 ? null : arr[index - 1];
    element.next = previous;
    const first = index === arr.length - 1;
    if (first) {
      tempListNode = element;
    }
  }
  return tempListNode;
}

function test() {
  const listNodeList = createListNode([1, 2, 3, 4, 5]);
  const res = reverseList(listNodeList);
  console.log(res);
}

export default test;
