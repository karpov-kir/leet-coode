import { ListNode } from '../../structures';
import { prepareSolutionsAndTestCases } from '../../utils';
import { mergeTwoLists } from './merge-two-sorted-lists';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: mergeTwoLists,
      name: 'Merge two sorted lists',
    },
  ],
  [
    {
      testCase: [ListNode.fromArray([1, 2, 4]), ListNode.fromArray([1, 3, 4])] as const,
      expectedResult: ListNode.fromArray([1, 1, 2, 3, 4, 4]),
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    'should merge $humanReadableTestCase lists in a one sorted list',
    ({ getTestCase, expectedResult }) => {
      expect(solution(...getTestCase())).toEqual(expectedResult);
    },
  );
});
