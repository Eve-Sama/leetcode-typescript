import { ListNode } from '@utils/interface';
import { createListNode } from '@utils//create';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let res: ListNode = null;
  while (headA.next && headB.next) {
    if (headA.next.val === headB.next.val) {
      res = headA.next;
    } else {
      headA = headA.next;
      headB = headB.next;
    }
  }
  return res;
}

function test() {
  const res = getIntersectionNode(createListNode([4,1,8,4,5]), createListNode([5,6,1,8,4,5]));
  console.log(res);
}

export default test;
