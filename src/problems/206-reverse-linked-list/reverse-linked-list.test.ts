import { ListNode } from '../../structures';
import { prepareSolutionsAndTestCases } from '../../utils';
import { reverseList as reverseListIterativeApproach } from './reverse-linked-list-iterative-approach';
import { reverseList as reverseListRecursiveApproachV1 } from './reverse-linked-list-recursive-approach-v1';
import { reverseList as reverseListRecursiveApproachV2 } from './reverse-linked-list-recursive-approach-v2';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: reverseListIterativeApproach,
      name: 'Reverse linked list (iterative approach)',
    },
    {
      solution: reverseListRecursiveApproachV1,
      name: 'Reverse linked list (recursive approach v1)',
    },
    {
      solution: reverseListRecursiveApproachV2,
      name: 'Reverse linked (list recursive approach v2)',
    },
  ],
  [
    {
      testCase: ListNode.fromArray([1, 2, 4, 4, 5]),
      expectedResult: ListNode.fromArray([5, 4, 4, 2, 1]),
    },
    {
      testCase: ListNode.fromArray([1, 2]),
      expectedResult: ListNode.fromArray([2, 1]),
    },
    {
      testCase: ListNode.fromArray([1]),
      expectedResult: ListNode.fromArray([1]),
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    'should reverse $humanReadableTestCase list',
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
