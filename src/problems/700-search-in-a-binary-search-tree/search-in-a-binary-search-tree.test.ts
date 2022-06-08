import { TreeNode } from '../../structures/TreeNode';
import { prepareSolutionsAndTestCases } from '../../utils';
import { searchBST as searchBstIterativeApproach } from './search-in-a-binary-search-tree-iterative-approach';
import { searchBST as searchBstRecursiveApproach } from './search-in-a-binary-search-tree-recursive-approach';

const testCaseTreeNode = TreeNode.fromObject({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 7,
  },
});

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: searchBstRecursiveApproach,
      name: 'Search in a binary search tree (recursive approach)',
    },
    {
      solution: searchBstIterativeApproach,
      name: 'Search in a binary search tree (iterative approach)',
    },
  ],
  [
    {
      testCase: {
        treeNode: testCaseTreeNode,
        value: 2,
      },
      expectedResult: TreeNode.fromObject({
        val: 2,
        left: {
          val: 1,
        },
        right: {
          val: 3,
        },
      }),
    },
    {
      testCase: {
        treeNode: testCaseTreeNode,
        value: 3,
      },
      expectedResult: new TreeNode(3),
    },
    {
      testCase: {
        treeNode: testCaseTreeNode,
        value: 5,
      },
      expectedResult: null,
    },
    {
      testCase: {
        treeNode: testCaseTreeNode,
        value: 4,
      },
      expectedResult: testCaseTreeNode,
    },
  ],
  {
    testCaseAsArguments: true,
  },
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    `should find the node in the BST $humanReadableTestCase.treeNode that the node's value equals $humanReadableTestCase.value and return the subtree rooted with that node`,
    ({ getTestCase, expectedResult }) => {
      const { treeNode, value } = getTestCase();
      expect(solution(treeNode, value)).toEqual(expectedResult);
    },
  );
});
