import { ListNode } from '@utils/interface';
import { createListNode } from '@utils//create';

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let jump = false;
  let temp: ListNode;
  let res = head;
  let first = true;
  while (head.next) {
    // 第二个元素
    temp = head.next;
    if (jump) {
      head = head.next;
    } else {
      // 1 => 3
      head.next = temp ? temp.next : null;
      temp.next = head;
      jump = !jump;
      head = temp.next;
    }
    if (first) {
      res = temp;
      first = false;
    }
  }
  return res;
}

function test() {
  const list = createListNode([1, 2, 3, 4]);
  const res = swapPairs(list);
  console.log(res);
}

export default test;
