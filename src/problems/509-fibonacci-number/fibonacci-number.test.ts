import { prepareSolutionsAndTestCases } from '../../utils';
import { fib as fibonacciNumberIterativeApproach } from './fibonacci-number-iterative-approach';
import { fib as fibonacciNumberRecursiveApproach } from './fibonacci-number-recursive-approach';

const { solutions, testCasesAndExpectedResults } = prepareSolutionsAndTestCases(
  [
    {
      solution: fibonacciNumberRecursiveApproach,
      name: 'Fibonacci number (recursive approach)',
    },
    {
      solution: fibonacciNumberIterativeApproach,
      name: 'Fibonacci number (iterative approach)',
    },
  ],
  [
    {
      testCase: 1,
      expectedResult: 1,
    },
    {
      testCase: 2,
      expectedResult: 1,
    },
    {
      testCase: 4,
      expectedResult: 3,
    },
    {
      testCase: 7,
      expectedResult: 13,
    },
    {
      testCase: 10,
      expectedResult: 55,
    },
  ],
);

describe.each(solutions)('$name', ({ solution }) => {
  it.each(testCasesAndExpectedResults)(
    `should return result of fibonacci sequence for $humanReadableTestCase`,
    ({ getTestCase, expectedResult }) => {
      expect(solution(getTestCase())).toEqual(expectedResult);
    },
  );
});
