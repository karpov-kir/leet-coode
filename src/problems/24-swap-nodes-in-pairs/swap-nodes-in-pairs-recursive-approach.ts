// https://leetcode.com/problems/swap-nodes-in-pairs/
// Swap nodes in pairs (recursive approach)

import { ListNode } from '../../structures';

export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return head;
  }

  return new ListNode(head.next.val, new ListNode(head.val, swapPairs(head.next.next)));
}
