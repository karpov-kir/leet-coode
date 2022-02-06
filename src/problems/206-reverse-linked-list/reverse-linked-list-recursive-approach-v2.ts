// https://leetcode.com/problems/reverse-linked-list/
// Reverse linked list (recursive approach v2)

import { ListNode } from '../../structures';

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const newStartHead = reverseList(head.next);

  head.next.next = head;
  // The very first element will be the last one.
  // So it should not have the next element.
  head.next = null;

  return newStartHead;
}
