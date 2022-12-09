import { ListNode } from '@utils/interface';
import { createListNode } from '@utils//create';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let add = false;
  let listNode = new ListNode(0);
  let curNode = listNode;
  while (l1 || l2) {
    const l1Value = l1 ? l1.val : 0;
    const l2Value = l2 ? l2.val : 0;
    let sum = l1Value + l2Value;
    if (add) {
      ++sum;
      add = false;
    }
    if (sum >= 10) {
      add = true;
    }
    const single = sum % 10;
    curNode.next = new ListNode(single)
    curNode = curNode.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (add) {
    curNode.next = new ListNode(1);
  }
  return listNode.next;
}

function test() {
  // const l1 = createListNode([9, 9, 9, 9, 9, 9, 9]);
  // const l2 = createListNode([9, 9, 9, 9]);
  // const l1 = createListNode([0]);
  // const l2 = createListNode([0]);
  const l1 = createListNode([2, 4, 3]);
  const l2 = createListNode([5, 6, 4]);
  const res = addTwoNumbers(l1, l2);
  console.log(res);
}

export default test;
