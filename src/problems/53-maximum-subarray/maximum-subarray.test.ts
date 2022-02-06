import { prepareSolutionsAndTestCases } from '../../utils';
import { maxSubArray as maxSubArrayKadanesAlgorithmApproach } from './maximum-subarray-kadanes-algorithm-approach';
import { maxSubArray as maxSubArrayNaiveApproach } from './maximum-subarray-naive-approach';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: maxSubArrayKadanesAlgorithmApproach,
      name: "Maximum subarray (Kadane's algorithm approach)",
    },
    {
      solution: maxSubArrayNaiveApproach,
      name: 'Maximum subarray (naive approach)',
    },
  ],
  [
    {
      testCase: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      expectedResult: 6,
    },
    {
      testCase: [1, 2, 3, 4, 5, 6],
      expectedResult: 21,
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    'should find the contiguous subarray of $humanReadableTestCase which has the largest sum',
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
