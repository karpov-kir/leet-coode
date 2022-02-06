// https://leetcode.com/problems/merge-two-sorted-lists/
// Merge two sorted lists

import { ListNode } from '../../structures';

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }

  const mergedAndSortedRootNode = new ListNode();
  let currentMergedAndSorted = mergedAndSortedRootNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentMergedAndSorted.next = l1;
      l1 = l1.next;
    } else {
      currentMergedAndSorted.next = l2;
      l2 = l2.next;
    }

    if (currentMergedAndSorted.next) {
      currentMergedAndSorted = currentMergedAndSorted.next;
    }
  }

  if (l1 !== null && l2 === null) {
    currentMergedAndSorted.next = l1;
  } else if (l1 === null && l2 !== null) {
    currentMergedAndSorted.next = l2;
  }

  return mergedAndSortedRootNode.next;
}
