// https://leetcode.com/problems/search-in-a-binary-search-tree/
// Search in a binary search tree (iterative approach)

import { TreeNode } from '../../structures/TreeNode';

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let current = root;

  while (!!current) {
    if (current.val === val) {
      return current;
    }

    if (val > current.val) {
      current = current.right;
    } else {
      current = current.left;
    }
  }

  return null;
}
