// https://leetcode.com/problems/search-in-a-binary-search-tree/
// Search in a binary search tree (recursive approach)
import { TreeNode } from '../../structures/TreeNode';

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (val > root.val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
}
