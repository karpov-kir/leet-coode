// https://leetcode.com/problems/reverse-linked-list/
// Reverse linked list (recursive approach v1)

import { ListNode } from '../../structures';

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const firstStep = head.next;
  // Will be changed to point to the most recent head as we go
  let newStartHead = head;

  // The very first element will be the last one.
  // So it should not have the next element.
  newStartHead.next = null;

  reverseStep(firstStep);

  return newStartHead;

  function reverseStep(headStep: ListNode) {
    const nextHead = headStep.next;
    const previousHead = newStartHead;

    newStartHead = headStep;
    newStartHead.next = previousHead;

    if (nextHead) {
      reverseStep(nextHead);
    }
  }
}
