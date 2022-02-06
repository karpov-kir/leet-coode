// https://leetcode.com/problems/reverse-linked-list/
// Reverse linked list (recursive approach)

import { ListNode } from '../../structures';

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let newStartHead = head;
  let previousHead = null;
  let nextHead = newStartHead.next;

  while (nextHead) {
    newStartHead.next = previousHead;
    previousHead = newStartHead;
    newStartHead = nextHead;
    nextHead = nextHead.next;
  }

  // As `newStartHead` is assigned before `newHead` is switched to the next head
  // there is always a case that `newStartHead` is set to the latest element
  // but there is no one more iteration to link it to the new sequence
  // using `newStartHead.next = previousHead`.
  newStartHead.next = previousHead;

  return newStartHead;
}
