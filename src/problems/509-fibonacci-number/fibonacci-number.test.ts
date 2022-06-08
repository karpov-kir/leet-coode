import { prepareSolutionsAndTestCases } from '../../utils';
import { fib as fibIterativeBottomUpApproach } from './fibonacci-number-iterative-bottom-up-approach';
import { fib as fibRecursiveTopDownApproach } from './fibonacci-number-recursive-top-down-approach';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: fibRecursiveTopDownApproach,
      name: 'Fibonacci number (recursive top-down approach)',
    },
    {
      solution: fibIterativeBottomUpApproach,
      name: 'Fibonacci number (iterative bottom-up approach)',
    },
  ],
  [
    {
      testCase: 4,
      expectedResult: 3,
    },
    {
      testCase: 10,
      expectedResult: 55,
    },
    {
      testCase: 20,
      expectedResult: 6765,
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    `should calculate fibonacci for $humanReadableTestCase`,
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
