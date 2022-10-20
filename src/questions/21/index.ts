import { ListNode } from '@utils/interface';
import { createListNode } from '@utils//create';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let l1 = list1;
  let l2 = list2;
  const arr: number[] = [];
  while (l1 || l2) {
    if (l1 === null && l2) {
      arr.push(l2.val);
      l2 = l2.next;
    } else if(l1 && l2 === null) {
      arr.push(l1.val);
      l1 = l1.next;
    } else if (l1.val <= l2.val) {
      arr.push(l1.val);
      l1 = l1.next;
    } else {
      arr.push(l2.val);
      l2 = l2.next;
    }
  }
  return createListNode(arr);
}

function test() {
  const list1 = createListNode([1, 2, 4]);
  const list2 = createListNode([1, 3, 4]);
  const res = mergeTwoLists(list1, list2);
  console.log(res);
}

export default test;
