// https://leetcode.com/problems/swap-nodes-in-pairs/
// Swap nodes in pairs (iterative approach)

import { ListNode } from '../../structures';

export function swapPairs(head: ListNode | null): ListNode | null {
  const newStart = head
    ? // If we have at least 2 nodes, then the second one will be the first one
      // and we can use it as a new start for the list
      head.next || head
    : null;
  // First node will be swapped to be the second node in the pair
  let previousSecondNodeInPair = head;

  while (head && head.next) {
    const first = head;
    const second = head.next;

    // Previous second node (the most right one) from the previous pair / iteration should be linked
    // with the node which will go first after swapping in the current iteration
    // [
    //  {
    //      new_first,
    //      new_second(latest or the most right)
    //  },
    //  #pointer is here#,
    //  {
    //      first(will be swapped),
    //      second(will be new_first, so it needs to be linked as next to new_second from the previous iteration)
    //  }
    // ]
    previousSecondNodeInPair!.next = second;
    head = second.next;

    first.next = second.next;
    second.next = first;

    previousSecondNodeInPair = first;
  }

  return newStart;
}
