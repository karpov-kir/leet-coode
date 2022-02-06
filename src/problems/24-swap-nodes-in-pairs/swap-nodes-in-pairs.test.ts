import { ListNode } from '../../structures';
import { prepareSolutionsAndTestCases } from '../../utils';
import { swapPairs as swapPairsIterativeApproach } from './swap-nodes-in-pairs-iterative-approach';
import { swapPairs as swapPairsRecursiveApproach } from './swap-nodes-in-pairs-recursive-approach';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: swapPairsIterativeApproach,
      name: 'Swap nodes in pairs (iterative approach)',
    },
    {
      solution: swapPairsRecursiveApproach,
      name: 'Swap nodes in pairs (recursive approach)',
    },
  ],
  [
    {
      testCase: ListNode.fromArray([1, 2, 3, 4]),
      expectedResult: ListNode.fromArray([2, 1, 4, 3]),
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    'should swap every two adjacent nodes of $humanReadableTestCase',
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
