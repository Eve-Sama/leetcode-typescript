import { ListNode } from '@utils/interface';
import { createListNode } from '@utils//create';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const map = new Map<ListNode, ListNode>();
  while (headA) {
    map.set(headA, headA);
    headA = headA.next;
  }
  while (headB) {
    const target = map.get(headB);
    if (target) {
      return target;
    }
    headB = headB.next;
  }
  return null;
}

function test() {
  const connection = createListNode([8, 4, 5]);
  const list1 = createListNode([4, 1]);
  const list2 = createListNode([5, 6, 1]);
  list1.next.next = connection;
  list2.next.next.next = connection;
  console.log(list1, `list1`);
  console.log(list2, `list2`);
  const res = getIntersectionNode(list1, list2);
  console.log(res);
}

export default test;
